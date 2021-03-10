import { createAction, props } from '@ngrx/store';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { Response } from 'src/app/core/model/response';

//all invoices detail
export const retrieveAllInvoicesDetail = createAction('[InvoiceDetail] invoice detail');
export const initInvoicesDetail = createAction('[InvoiceDetail] init invoice detail', props<{response: Response}>());

//provisional invoice detail
export const calculateProvisionalInvoiceDetail = createAction('[InvoiceDetail] calculate provisional invoice detail', props<{invoiceDetail: InvoiceDetail}>());
export const initProvisionalInvoiceDetail = createAction('[InvoiceDetail] init provisional invoice detail', props<{response: Response}>());
export const editInvoiceDetailList = createAction('[InvoiceDetail] edit invoice detail list', props<{invoiceDetailList: InvoiceDetail[]}>());
export const editProvisionalInvoiceDetail = createAction('[InvoiceDetail] edit invoice detail list', props<{invoiceDetailPrec: InvoiceDetail, invoiceDetailNew: InvoiceDetail}>());
export const deleteProvisionalInvoiceDetail = createAction('[InvoiceDetail] delete provisional invoice detail', props<{invoiceDetail: InvoiceDetail}>())
export const deleteProvisionalInvoicesDetail = createAction('[InvoiceDetail] delete provisional invoices detail');

//create invoice detail
export const createInvoiceDetail = createAction('[InvoiceDetail] create invoice detail', props<{invoiceDetailList: InvoiceDetail[]}>());

//delete invoice detail
export const deleteInvoiceDetail = createAction('[InvoiceDetail] delete invoice detail', props<{invoiceDetail: InvoiceDetail}>());