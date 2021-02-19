import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { createInvoiceSummary, deleteInvoiceSummary, initInvoicesSummary, retrieveAllInvoicesSummary } from './invoiceSummary.actions';

@Injectable()
export class InvoicesSummaryEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllInvoicesSummary(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("invoice/summary/findAll")
    }

    createInvoiceSummary(invoiceSummary: InvoiceSummary): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/summary/create", invoiceSummary)
    }

    deleteInvoiceSummary(invoiceSummary: InvoiceSummary): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/summary/delete", invoiceSummary)
    }

    getAllInvoicesSummary$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllInvoicesSummary),
        switchMap(() => this.retrieveAllInvoicesSummary().pipe(
            map((response) => initInvoicesSummary({ response }))
        ))
    ));

    createInvoiceSummary$ = createEffect(() => this.actions$.pipe(
        ofType(createInvoiceSummary),
        switchMap(invoiceSummary => this.createInvoiceSummary(invoiceSummary.invoiceSummary).pipe(
            map(() => retrieveAllInvoicesSummary()),
        )))
    );

    deleteInvoiceSummary$ = createEffect(() => this.actions$.pipe(
        ofType(deleteInvoiceSummary),
        switchMap(invoiceSummary => this.deleteInvoiceSummary(invoiceSummary.invoiceSummary).pipe(
            map(() => retrieveAllInvoicesSummary()),
        )))
    );

}