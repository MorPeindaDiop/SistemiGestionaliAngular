import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { createInvoiceMaster, deleteInvoice, initInvoicesMaster, retrieveAllInvoicesMaster } from './invoiceMaster.actions';

@Injectable()
export class InvoicesMasterEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllInvoicesMaster(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("invoice/master/findAll")
    }

    createInvoiceMaster(invoiceMaster: InvoiceMaster): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/master/create", invoiceMaster)
    }

    deleteInvoiceMaster(codInvoice: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/delete", codInvoice)
    }

    getAllInvoicesMaster$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllInvoicesMaster),
        switchMap(() => this.retrieveAllInvoicesMaster().pipe(
            map((response) => initInvoicesMaster({ response }))
        ))
    ));

    createInvoiceMaster$ = createEffect(() => this.actions$.pipe(
        ofType(createInvoiceMaster),
        switchMap(invoiceMaster => this.createInvoiceMaster(invoiceMaster.invoiceMaster).pipe(
            map(() => retrieveAllInvoicesMaster()),
        )))
    );

    deleteInvoiceMaster$ = createEffect(() => this.actions$.pipe(
        ofType(deleteInvoice),
        switchMap(codInvoice => this.deleteInvoiceMaster(codInvoice.codInvoice).pipe(
            map(() => retrieveAllInvoicesMaster()),
        )))
    );

}