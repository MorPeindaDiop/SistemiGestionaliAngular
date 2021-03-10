import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
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

export const getCurrentNavigatedInvoiceMaster = createSelector(
    selectInvoicesMasterState,
    selectRouteParams,
    (state: InvoicesMasterState, params: Params) => state.invoicesMaster.find(item => item.codInvoice == Number(params['codInvoice']))
);