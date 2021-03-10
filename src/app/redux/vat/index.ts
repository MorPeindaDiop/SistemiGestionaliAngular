import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { VatState } from "./vat.reducers";

export const selectVatState = (state: AppState) => state.vatState;

export const selectVat = createSelector(
    selectVatState,
    (state: VatState) => state.vat
);

export const getCurrentNavigatedVat = createSelector(
    selectVatState,
    selectRouteParams,
    (state: VatState, params: Params) => state.vat.find(item => item.codVat === String(params['codVat']))
);