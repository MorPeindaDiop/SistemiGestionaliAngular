import { Action, createReducer, on } from "@ngrx/store";
import { Item } from "src/app/core/model/item";
import { initItems } from './item.actions';

export interface ItemsState {
    items: Item[];
}

export const initialState: ItemsState = {
    items: []
};

const reducer = createReducer(
    initialState,
    on(initItems, (state, { response }) => ({ ...state, items: response.result }))
);

export function itemsReducer(state: ItemsState | undefined, action: Action) {
    return reducer(state, action);
}