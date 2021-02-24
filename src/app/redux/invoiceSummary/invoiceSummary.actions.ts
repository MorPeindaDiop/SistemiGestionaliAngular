import { createAction, props } from '@ngrx/store';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Response } from 'src/app/core/model/response';

//all invoices summary
export const retrieveAllInvoicesSummary = createAction('[InvoiceSummary] invoice summary');
export const initInvoicesSummary = createAction('[InvoiceSummary] init invoice summary', props<{response: Response}>());

//provisional invoice summary
export const calculateProvisionalInvoiceSummary = createAction('[InvoiceSummary] calculate provisional invoice summary', props<{codInvoice: number}>());
export const initProvisionalInvoiceSummary = createAction('[InvoiceSummary] init provisional invoice summary', props<{response: Response}>());

//create invoice summary
export const createInvoiceSummary = createAction('[InvoiceSummary] create invoice summary', props<{invoiceSummary: InvoiceSummary}>());

//delete invoice summary
export const deleteInvoiceSummary = createAction('[InvoiceSummary] delete invoice summary', props<{invoiceSummary: InvoiceSummary}>());