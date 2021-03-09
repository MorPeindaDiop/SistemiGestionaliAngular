import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Invoice } from 'src/app/core/model/invoice';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { retrieveAllClients } from 'src/app/redux/cliente/client.actions';
import { calculateProvisionalInvoiceDetail, deleteProvisionalInvoiceDetail, deleteProvisionalInvoicesDetail, editInvoiceDetailList, retrieveAllInvoicesDetail } from 'src/app/redux/invoiceDetail/invoiceDetail.actions';
import { calculateProvisionalTailDiscount, createInvoice, createInvoiceMaster, deleteInvoice, retrieveAllInvoicesMaster } from 'src/app/redux/invoiceMaster/invoiceMaster.actions';
import { calculateProvisionalInvoiceSummary, createInvoiceSummary, deleteInvoiceSummary, deleteProvisionalInvoiceSummary, retrieveAllInvoicesSummary } from 'src/app/redux/invoiceSummary/invoiceSummary.actions';
import { retrieveAllItems } from 'src/app/redux/item/item.actions';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private store: Store) { }

  //retrieve
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
    return this.store.dispatch(calculateProvisionalInvoiceDetail({ invoiceDetail }))
  }

  calculateProvisionalInvoiceSummary(invoiceDetailList: InvoiceDetail[]) {
    return this.store.dispatch(calculateProvisionalInvoiceSummary({ invoiceDetailList }))
  }

  calculateProvisionalTailDiscount(invoice: Invoice) {
    return this.store.dispatch(calculateProvisionalTailDiscount({ invoice }))
  }

  //edit
  editInvoiceDetailList(invoiceDetailList: InvoiceDetail[]) {
    return this.store.dispatch(editInvoiceDetailList({ invoiceDetailList }))
  }

  //create
  createInvoice(invoice: Invoice) {
    return this.store.dispatch(createInvoice({ invoice }))
  }

  //delete
  deleteInvoice(codInvoice: number) {
    return this.store.dispatch(deleteInvoice({ codInvoice }))
  }

  deleteProvisionalInvoiceDetail(invoiceDetail: InvoiceDetail) {
    return this.store.dispatch(deleteProvisionalInvoiceDetail({ invoiceDetail }))
  }

  deleteProvisionalCalculations() {
    return this.store.dispatch(deleteProvisionalInvoicesDetail()), this.store.dispatch(deleteProvisionalInvoiceSummary());
  }

  //retrieve info
  retrieveAllClients() {
    return this.store.dispatch(retrieveAllClients())
  }

  retrieveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }

}
