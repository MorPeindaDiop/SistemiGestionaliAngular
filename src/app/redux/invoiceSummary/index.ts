import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { InvoicesSummaryState } from "./invoiceSummary.reducers";

export const selectInvoicesSummaryState = (state: AppState) => state.invoicesSummaryState;

export const selectInvoicesSummary = createSelector(
    selectInvoicesSummaryState,
    (state: InvoicesSummaryState) => state.invoicesSummary
);