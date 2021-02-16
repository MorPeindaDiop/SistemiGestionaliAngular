import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer, ItemsState } from "./item/item.reducers";
import { measureReducer, MeasuresState } from "./measure/measure.reducers";
import { vatReducer, VatState } from "./vat/vat.reducers";

export interface AppState {
    router: RouterReducerState<any>;
    itemsState: ItemsState;
    vatState: VatState;
    measureState: MeasuresState
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    itemsState: itemsReducer,
    vatState: vatReducer,
    measureState: measureReducer
};