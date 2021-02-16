import { Action, createReducer, on } from "@ngrx/store";
import { Category } from "src/app/core/model/category";
import { initCategories } from "./category.actions";

export interface CategoriesState {
    categories: Category[];
}

export const initialState: CategoriesState = {
    categories: []
};

const reducer = createReducer(
    initialState,
    on(initCategories, (state, { response }) => ({ ...state, categories: response.result }))
);

export function categoriesReducer(state: CategoriesState | undefined, action: Action) {
    return reducer(state, action);
}