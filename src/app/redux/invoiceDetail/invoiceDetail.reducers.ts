import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceDetail } from "src/app/core/model/invoice-detail";
import { initInvoicesDetail } from "./invoiceDetail.actions";

export interface InvoicesDetailState {
    invoicesDetail: InvoiceDetail[];
}

export const initialState: InvoicesDetailState = {
    invoicesDetail: []
};

const reducer = createReducer(
    initialState,
    on(initInvoicesDetail, (state, { response }) => ({ ...state, invoicesDetail: response.result }))
);

export function invoicesDetailReducer(state: InvoicesDetailState | undefined, action: Action) {
    return reducer(state, action);
}