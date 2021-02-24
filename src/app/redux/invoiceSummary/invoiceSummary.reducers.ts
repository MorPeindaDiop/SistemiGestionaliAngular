import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceSummary } from "src/app/core/model/invoice-summary";
import { initInvoicesSummary, initProvisionalInvoiceSummary } from "./invoiceSummary.actions";

export interface InvoicesSummaryState {
    invoicesSummary: InvoiceSummary[];
    provisionalInvoiceSummary: InvoiceSummary;
}

export const initialState: InvoicesSummaryState = {
    invoicesSummary: [],
    provisionalInvoiceSummary: null
};

const reducer = createReducer(
    initialState,
    on(initInvoicesSummary, (state, { response }) => ({ ...state, invoicesSummary: response.result })),
    on(initProvisionalInvoiceSummary, (state, { response }) => ({ ...state, provisionalInvoiceSummary: response.result }))
);

export function invoicesSummaryReducer(state: InvoicesSummaryState | undefined, action: Action) {
    return reducer(state, action);
}