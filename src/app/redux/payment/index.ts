import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { PaymentsState } from "./payment.reducers";

export const selectPaymentsState = (state: AppState) => state.paymentsState;

export const selectPayments = createSelector(
    selectPaymentsState,
    (state: PaymentsState) => state.payments
);