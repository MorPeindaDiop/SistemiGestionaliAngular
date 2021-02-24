import { createAction, props } from '@ngrx/store';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { Response } from 'src/app/core/model/response';

//all invoices detail
export const retrieveAllInvoicesDetail = createAction('[InvoiceDetail] invoice detail');
export const initInvoicesDetail = createAction('[InvoiceDetail] init invoice detail', props<{response: Response}>());

//provisional invoice detail
export const calculateProvisionalInvoiceDetail = createAction('[InvoiceDetail] calculate provisional invoice detail', props<{invoiceDetail: InvoiceDetail}>());
export const initProvisionalInvoiceDetail = createAction('[InvoiceDetail] init provisional invoice detail', props<{response: Response}>());

//create invoice detail
export const createInvoiceDetail = createAction('[InvoiceDetail] create invoice detail', props<{invoiceDetailList: InvoiceDetail[]}>());

//delete invoice detail
export const deleteInvoiceDetail = createAction('[InvoiceDetail] delete invoice detail', props<{invoiceDetail: InvoiceDetail}>());