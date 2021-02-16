import { Action, createReducer, on } from "@ngrx/store";
import { Vat } from "src/app/core/model/vat";
import { initVat } from './vat.actions';

export interface VatState {
    vat: Vat[];
}

export const initialState: VatState = {
    vat: []
};

const reducer = createReducer(
    initialState,
    on(initVat, (state, { response }) => ({ ...state, vat: response.result }))
);

export function vatReducer(state: VatState | undefined, action: Action) {
    return reducer(state, action);
}