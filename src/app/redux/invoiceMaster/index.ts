import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { InvoicesMasterState } from "./invoiceMaster.reducers";

export const selectInvoicesMasterState = (state: AppState) => state.invoicesMasterState;

export const selectInvoicesMaster = createSelector(
    selectInvoicesMasterState,
    (state: InvoicesMasterState) => state.invoicesMaster
);

export const selectCurrentInvoiceMaster = createSelector(
    selectInvoicesMasterState,
    (state: InvoicesMasterState) => state.currentInvoiceNumber
);