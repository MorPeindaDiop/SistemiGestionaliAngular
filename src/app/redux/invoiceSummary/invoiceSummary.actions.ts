import { createAction, props } from '@ngrx/store';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Response } from 'src/app/core/model/response';

//all invoices summary
export const retrieveAllInvoicesSummary = createAction('[InvoiceSummary] invoice summary');
export const initInvoicesSummary = createAction('[InvoiceSummary] init invoice summary', props<{response: Response}>());

//create invoice summary
export const createInvoiceSummary = createAction('[InvoiceSummary] create invoice summary', props<{invoiceSummary: InvoiceSummary}>());

//delete invoice summary
export const deleteInvoiceSummary = createAction('[InvoiceSummary] delete invoice summary', props<{invoiceSummary: InvoiceSummary}>());