import { createAction, props } from '@ngrx/store';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Response } from 'src/app/core/model/response';

//all invoices summary
export const retrieveAllInvoicesSummary = createAction('[InvoiceSummary] invoice summary');
export const initInvoicesSummary = createAction('[InvoiceSummary] init invoice summary', props<{response: Response}>());

//provisional invoice summary
export const calculateProvisionalInvoiceSummary = createAction('[InvoiceSummary] calculate provisional invoice summary', props<{invoiceDetailList: InvoiceDetail[]}>());
export const initProvisionalInvoiceSummary = createAction('[InvoiceSummary] init provisional invoice summary', props<{response: Response}>());
export const deleteProvisionalInvoiceSummary = createAction('[InvoiceSummary] delete provisional invoice summary');

//create invoice summary
export const createInvoiceSummary = createAction('[InvoiceSummary] create invoice summary', props<{invoiceSummary: InvoiceSummary}>());

//delete invoice summary
export const deleteInvoiceSummary = createAction('[InvoiceSummary] delete invoice summary', props<{invoiceSummary: InvoiceSummary}>());