import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceSummary } from "src/app/core/model/invoice-summary";
import { initInvoicesSummary } from "./invoiceSummary.actions";

export interface InvoicesSummaryState {
    invoicesSummary: InvoiceSummary[];
}

export const initialState: InvoicesSummaryState = {
    invoicesSummary: []
};

const reducer = createReducer(
    initialState,
    on(initInvoicesSummary, (state, { response }) => ({ ...state, invoicesSummary: response.result }))
);

export function invoicesSummaryReducer(state: InvoicesSummaryState | undefined, action: Action) {
    return reducer(state, action);
}