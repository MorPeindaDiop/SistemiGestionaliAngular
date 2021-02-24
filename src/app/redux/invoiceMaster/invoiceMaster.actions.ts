import { createAction, props } from '@ngrx/store';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { Response } from 'src/app/core/model/response';

//all invoices master
export const retrieveAllInvoicesMaster = createAction('[InvoiceMaster] invoice master');
export const initInvoicesMaster = createAction('[InvoiceMaster] init invoice master', props<{response: Response}>());

//create invoice Master
export const createInvoiceMaster = createAction('[InvoiceMaster] create invoice master', props<{invoiceMaster: InvoiceMaster}>());
export const initNewInvoiceMaster = createAction('[InvoiceMaster] init new invoice master', props<{response: Response}>());

//delete invoice Master
export const deleteInvoice = createAction('[Invoice] delete invoice', props<{codInvoice: number}>());