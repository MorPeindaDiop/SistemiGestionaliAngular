import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Invoice } from 'src/app/core/model/invoice';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { retrieveAllClients } from 'src/app/redux/cliente/client.actions';
import { calculateProvisionalInvoiceDetail, createInvoiceDetail, deleteInvoiceDetail, retrieveAllInvoicesDetail } from 'src/app/redux/invoiceDetail/invoiceDetail.actions';
import { createInvoice, createInvoiceMaster, deleteInvoice, retrieveAllInvoicesMaster } from 'src/app/redux/invoiceMaster/invoiceMaster.actions';
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
  
  //calcoli
  calculateProvisionalInvoiceDetail(invoiceDetail: InvoiceDetail) {
    return this.store.dispatch(calculateProvisionalInvoiceDetail({invoiceDetail}))
  }

  calculateProvisionalInvoiceSummary(invoiceDetailList: InvoiceDetail[]) {
    return this.store.dispatch(calculateProvisionalInvoiceSummary({invoiceDetailList}))
  }

  //create
  createInvoice(invoice: Invoice) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(createInvoice({invoice}))
  }

  //delete
  deleteInvoice(codInvoice: number) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteInvoice({codInvoice}))
  }

  //retrieve info
  retrieveAllClients() {
    return this.store.dispatch(retrieveAllClients())
  }

  retrieveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }
  
}
