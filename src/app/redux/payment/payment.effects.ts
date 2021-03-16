import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { Payment } from 'src/app/core/model/payment';
import { createPayment, deletePayment, initPayments, retrieveAllPayments } from './payment.actions';

@Injectable()
export class PaymentsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllPayments(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("payment/findAll")
    }

    createPayment(payment: Payment): Observable<Response> {
        return this.http.retrievePostCall<Response>("payment/create", payment)
    }

    deletePayment(payment: Payment): Observable<Response> {
        return this.http.retrievePostCall<Response>("payment/delete", payment)
    }

    getAllPayments$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllPayments),
        switchMap(() => this.retrieveAllPayments().pipe(
            map((response) => initPayments({ response }))
        ))
    ));

    createPayment$ = createEffect(() => this.actions$.pipe(
        ofType(createPayment),
        switchMap(payment => this.createPayment(payment.payment).pipe(
            map(() => retrieveAllPayments()),
        )))
    );

    deletePayment$ = createEffect(() => this.actions$.pipe(
        ofType(deletePayment),
        switchMap(payment => this.deletePayment(payment.payment).pipe(
            map(() => retrieveAllPayments()),
        )))
    );

}