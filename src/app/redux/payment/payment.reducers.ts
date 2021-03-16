import { Action, createReducer, on } from "@ngrx/store";
import { Payment } from "src/app/core/model/payment";
import { initPayments } from "./payment.actions";


export interface PaymentsState {
    payments: Payment[];
}

export const initialState: PaymentsState = {
    payments: []
};

const reducer = createReducer(
    initialState,
    on(initPayments, (state, { response }) => ({ ...state, payments: response.result }))
);

export function paymentsReducer(state: PaymentsState | undefined, action: Action) {
    return reducer(state, action);
}