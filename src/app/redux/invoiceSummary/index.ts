import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { InvoicesSummaryState } from "./invoiceSummary.reducers";

export const selectInvoicesSummaryState = (state: AppState) => state.invoicesSummaryState;

export const selectInvoicesSummary = createSelector(
    selectInvoicesSummaryState,
    (state: InvoicesSummaryState) => state.invoicesSummary
);

export const selectProvisionalInvoiceSummary = createSelector(
    selectInvoicesSummaryState,
    (state: InvoicesSummaryState) => state.provisionalInvoiceSummary
);

export const getCurrentNavigatedInvoiceSummary = createSelector(
    selectInvoicesSummaryState,
    selectRouteParams,
    (state: InvoicesSummaryState, params: Params) => state.invoicesSummary.find(item => item.codInvoice == Number(params['codInvoice']))
);