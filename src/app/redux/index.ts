import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer, ItemsState } from "./item/item.reducers";

export interface AppState {
    router: RouterReducerState<any>;
    itemsState: ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    itemsState: itemsReducer,
};