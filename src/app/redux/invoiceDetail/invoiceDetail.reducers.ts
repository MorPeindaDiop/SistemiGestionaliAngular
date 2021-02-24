import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceDetail } from "src/app/core/model/invoice-detail";
import { initInvoicesDetail, initProvisionalInvoiceDetail } from "./invoiceDetail.actions";

export interface InvoicesDetailState {
    invoicesDetail: InvoiceDetail[];
    provisionalInvoiceDetailList: InvoiceDetail[];
}

export const initialState: InvoicesDetailState = {
    invoicesDetail: [],
    provisionalInvoiceDetailList: []
};

const reducer = createReducer(
    initialState,
    on(initInvoicesDetail, (state, { response }) => ({ ...state, invoicesDetail: response.result })),
    on(initProvisionalInvoiceDetail, (state, { response }) => ({ ...state, provisionalInvoiceDetailList: [...state.provisionalInvoiceDetailList, response.result] }))
);

export function invoicesDetailReducer(state: InvoicesDetailState | undefined, action: Action) {
    return reducer(state, action);
}