import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { ItemsState } from "./item.reducers";

export const selectItemsState = (state: AppState) => state.itemsState;

export const selectItems = createSelector(
    selectItemsState,
    (state: ItemsState) => state.items
);

export const getCurrentNavigatedItem = createSelector(
    selectItemsState,
    selectRouteParams,
    (state: ItemsState, params: Params) => state.items.find(item => item.cod_item === String(params['id']))
);