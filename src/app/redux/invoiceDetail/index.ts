import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { InvoicesDetailState } from "./invoiceDetail.reducers";

export const selectInvoicesDetailState = (state: AppState) => state.invoicesDetailState;

export const selectInvoicesDetail = createSelector(
    selectInvoicesDetailState,
    (state: InvoicesDetailState) => state.invoicesDetail
);

export const selectProvisionalInvoicesDetail = createSelector(
    selectInvoicesDetailState,
    (state: InvoicesDetailState) => state.provisionalInvoiceDetailList
);

export const getCurrentNavigatedInvoiceDetail = createSelector(
    selectInvoicesDetailState,
    selectRouteParams,
    (state: InvoicesDetailState, params: Params) => state.invoicesDetail.filter(item => item.codInvoice == Number(params['codInvoice']))
);