import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { createInvoiceMaster, deleteInvoice, initInvoicesMaster, retrieveAllInvoicesMaster, initNewInvoiceMaster, createInvoice, calculateProvisionalTailDiscount, initProvisionalTailDiscount } from './invoiceMaster.actions';
import { Invoice } from 'src/app/core/model/invoice';
import { retrieveAllInvoicesDetail } from '../invoiceDetail/invoiceDetail.actions';
import { retrieveAllInvoicesSummary } from '../invoiceSummary/invoiceSummary.actions';

@Injectable()
export class InvoicesMasterEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllInvoicesMaster(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("invoice/master/findAll")
    }

    createInvoiceMaster(invoiceMaster: InvoiceMaster): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/master/create", invoiceMaster)
    }

    createInvoice(invoice: Invoice): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/create", invoice)
    }

    deleteInvoice(codInvoice: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/delete", codInvoice)
    }

    tailDiscountCalculations(invoice: Invoice): Observable<Response> {
        return this.http.retrievePostCall<Response>("invoice/tailDiscountCalculations", invoice)
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
            switchMap(response => [initNewInvoiceMaster( {response} ), retrieveAllInvoicesMaster()]),
        )))
    );

    tailDiscountCalculations$ = createEffect(() => this.actions$.pipe(
        ofType(calculateProvisionalTailDiscount),
        switchMap(invoice => this.tailDiscountCalculations(invoice.invoice).pipe(
            map((response) => initProvisionalTailDiscount({ response })),
        )))
    );

    createInvoice$ = createEffect(() => this.actions$.pipe(
        ofType(createInvoice),
        switchMap(invoice => this.createInvoice(invoice.invoice).pipe(
            switchMap( () => [retrieveAllInvoicesMaster(), retrieveAllInvoicesDetail(), retrieveAllInvoicesSummary()]),
        )))
    );

    deleteInvoiceMaster$ = createEffect(() => this.actions$.pipe(
        ofType(deleteInvoice),
        switchMap(codInvoice => this.deleteInvoice(codInvoice.codInvoice).pipe(
            map(() => retrieveAllInvoicesMaster()),
        )))
    );

}