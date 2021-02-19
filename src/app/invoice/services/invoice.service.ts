import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { createInvoiceDetail, deleteInvoiceDetail, retrieveAllInvoicesDetail } from 'src/app/redux/invoiceDetail/invoiceDetail.actions';
import { createInvoiceMaster, deleteInvoiceMaster, retrieveAllInvoicesMaster } from 'src/app/redux/invoiceMaster/invoiceMaster.actions';
import { createInvoiceSummary, deleteInvoiceSummary, retrieveAllInvoicesSummary } from 'src/app/redux/invoiceSummary/invoiceSummary.actions';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private store: Store) { }

  retrieveAllInvoicesMaster() {
    return this.store.dispatch(retrieveAllInvoicesMaster())
  }

  retrieveAllInvoicesDetail() {
    return this.store.dispatch(retrieveAllInvoicesDetail())
  }

  retrieveAllInvoicesSummary() {
    return this.store.dispatch(retrieveAllInvoicesSummary())
  }

  createInvoiceMaster(invoiceMaster: InvoiceMaster) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createInvoiceMaster({invoiceMaster}))
  }

  createInvoiceDetail(invoiceDetail: InvoiceDetail) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createInvoiceDetail({invoiceDetail}))
  }

  createInvoiceSummary(invoiceSummary: InvoiceSummary) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createInvoiceSummary({invoiceSummary}))
  }

  deleteInvoiceMaster(invoiceMaster: InvoiceMaster) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoiceMaster({invoiceMaster}))
  }

  deleteInvoiceDetail(invoiceDetail: InvoiceDetail) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoiceDetail({invoiceDetail}))
  }

  deleteInvoiceSummary(invoiceSummary: InvoiceSummary) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoiceSummary({invoiceSummary}))
  }
  
}
