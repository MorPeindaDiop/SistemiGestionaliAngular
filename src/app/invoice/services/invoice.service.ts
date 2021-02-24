import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { retrieveAllClients } from 'src/app/redux/cliente/client.actions';
import { calculateProvisionalInvoiceDetail, createInvoiceDetail, deleteInvoiceDetail, retrieveAllInvoicesDetail } from 'src/app/redux/invoiceDetail/invoiceDetail.actions';
import { createInvoiceMaster, deleteInvoice, retrieveAllInvoicesMaster } from 'src/app/redux/invoiceMaster/invoiceMaster.actions';
import { calculateProvisionalInvoiceSummary, createInvoiceSummary, deleteInvoiceSummary, retrieveAllInvoicesSummary } from 'src/app/redux/invoiceSummary/invoiceSummary.actions';
import { retrieveAllItems } from 'src/app/redux/item/item.actions';

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

  calculateProvisionalInvoiceDetail(invoiceDetail: InvoiceDetail) {
    return this.store.dispatch(calculateProvisionalInvoiceDetail({invoiceDetail}))
  }

  calculateProvisionalInvoiceSummary(codInvoice: number) {
    return this.store.dispatch(calculateProvisionalInvoiceSummary({codInvoice}))
  }

  createInvoiceDetail(invoiceDetailList: InvoiceDetail[]) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createInvoiceDetail({invoiceDetailList}))
  }

  createInvoiceSummary(invoiceSummary: InvoiceSummary) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createInvoiceSummary({invoiceSummary}))
  }

  deleteInvoice(codInvoice: number) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoice({codInvoice}))
  }

  deleteInvoiceDetail(invoiceDetail: InvoiceDetail) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoiceDetail({invoiceDetail}))
  }

  deleteInvoiceSummary(invoiceSummary: InvoiceSummary) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoiceSummary({invoiceSummary}))
  }



  retrieveAllClients() {
    return this.store.dispatch(retrieveAllClients())
  }

  retrieveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }
  
}
