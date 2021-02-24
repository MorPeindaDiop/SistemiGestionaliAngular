import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceMaster } from "src/app/core/model/invoice-master";
import { initNewInvoiceMaster, initInvoicesMaster } from "./invoiceMaster.actions";

export interface InvoicesMasterState {
    invoicesMaster: InvoiceMaster[];
    currentInvoiceNumber: InvoiceMaster;
}

export const initialState: InvoicesMasterState = {
    invoicesMaster: [],
    currentInvoiceNumber: null
};

const reducer = createReducer(
    initialState,
    on(initInvoicesMaster, (state, { response }) => ({ ...state, invoicesMaster: response.result })),
    on(initNewInvoiceMaster, (state, { response }) => ({ ...state, currentInvoiceNumber: response.result }))
);

export function invoicesMasterReducer(state: InvoicesMasterState | undefined, action: Action) {
    return reducer(state, action);
}