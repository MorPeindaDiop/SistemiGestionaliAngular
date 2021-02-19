import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { InvoicesDetailState } from "./invoiceDetail.reducers";

export const selectInvoicesDetailState = (state: AppState) => state.invoicesDetailState;

export const selectInvoicesDetail = createSelector(
    selectInvoicesDetailState,
    (state: InvoicesDetailState) => state.invoicesDetail
);