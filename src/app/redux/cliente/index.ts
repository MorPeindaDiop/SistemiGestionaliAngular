import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { ClientsState } from "./client.reducers";

export const selectClientsState = (state: AppState) => state.clientsState;

export const selectClients = createSelector(
    selectClientsState,
    (state: ClientsState) => state.clients
);