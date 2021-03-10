import { Action, createReducer, on } from "@ngrx/store";
import { InvoiceDetail } from "src/app/core/model/invoice-detail";
import { initProvisionalTailDiscount } from "../invoiceMaster/invoiceMaster.actions";
import { deleteProvisionalInvoicesDetail, initInvoicesDetail, initProvisionalInvoiceDetail, deleteProvisionalInvoiceDetail, editInvoiceDetailList, editProvisionalInvoiceDetail } from "./invoiceDetail.actions";

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
    on(initProvisionalInvoiceDetail, (state, { response }) => ({ ...state, provisionalInvoiceDetailList: [...state.provisionalInvoiceDetailList, response.result] })),
    on(deleteProvisionalInvoicesDetail, (state) => ({ ...state, provisionalInvoiceDetailList: [] })),
    on(deleteProvisionalInvoiceDetail, (state, { invoiceDetail }) => ({ ...state, provisionalInvoiceDetailList: [...state.provisionalInvoiceDetailList.filter(detail => detail != invoiceDetail )] })),
    on(editProvisionalInvoiceDetail, (state, { invoiceDetailPrec, invoiceDetailNew }) => ({ ...state, provisionalInvoiceDetailList: [...state.provisionalInvoiceDetailList.find(detail => {if (detail === invoiceDetailPrec) return detail = invoiceDetailNew} )] })),
    on(editInvoiceDetailList, (state, { invoiceDetailList }) => ({ ...state, provisionalInvoiceDetailList: invoiceDetailList })),
    on(initProvisionalTailDiscount, (state, { response }) => ({ ...state, provisionalInvoiceDetailList: response.result.invoiceDetailList }))
);
 
export function invoicesDetailReducer(state: InvoicesDetailState | undefined, action: Action) {
    return reducer(state, action);
}