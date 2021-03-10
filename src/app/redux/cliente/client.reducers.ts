import { Action, createReducer, on } from "@ngrx/store";
import { Client } from "src/app/core/model/client";
import { initClients } from './client.actions';

export interface ClientsState {
    clients: Client[];
}

export const initialState: ClientsState = {
    clients: []
};

const reducer = createReducer(
    initialState,
    on(initClients, (state, { response }) => ({ ...state, clients: response.result }))
);

export function clientsReducer(state: ClientsState | undefined, action: Action) {
    return reducer(state, action);
}