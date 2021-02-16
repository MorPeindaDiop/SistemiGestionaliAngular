import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { categoriesReducer, CategoriesState } from "./category/category.reducers";
import { clientsReducer, ClientsState } from "./cliente/client.reducers";
import { itemsReducer, ItemsState } from "./item/item.reducers";
import { measureReducer, MeasuresState } from "./measure/measure.reducers";
import { vatReducer, VatState } from "./vat/vat.reducers";

export interface AppState {
    router: RouterReducerState<any>;
    itemsState: ItemsState;
    vatState: VatState;
    measuresState: MeasuresState;
    clientsState: ClientsState;
    categoriesState: CategoriesState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    itemsState: itemsReducer,
    vatState: vatReducer,
    measuresState: measureReducer,
    clientsState: clientsReducer,
    categoriesState: categoriesReducer
};