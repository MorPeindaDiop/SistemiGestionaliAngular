import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { createInvoiceDetail, deleteInvoiceDetail, initInvoicesDetail, retrieveAllInvoicesDetail } from './invoiceDetail.actions';

@Injectable()
export class InvoicesDetailEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllInvoicesDetail(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("invoice/detail/findAll")
    }

    createInvoiceDetail(invoiceDetail: InvoiceDetail): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/detail/create", invoiceDetail)
    }

    deleteInvoiceDetail(invoiceDetail: InvoiceDetail): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/detail/delete", invoiceDetail)
    }

    getAllInvoicesDetail$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllInvoicesDetail),
        switchMap(() => this.retrieveAllInvoicesDetail().pipe(
            map((response) => initInvoicesDetail({ response }))
        ))
    ));

    createInvoiceDetail$ = createEffect(() => this.actions$.pipe(
        ofType(createInvoiceDetail),
        switchMap(invoiceDetail => this.createInvoiceDetail(invoiceDetail.invoiceDetail).pipe(
            map(() => retrieveAllInvoicesDetail()),
        )))
    );

    deleteInvoiceDetail$ = createEffect(() => this.actions$.pipe(
        ofType(deleteInvoiceDetail),
        switchMap(invoiceDetail => this.deleteInvoiceDetail(invoiceDetail.invoiceDetail).pipe(
            map(() => retrieveAllInvoicesDetail()),
        )))
    );

}