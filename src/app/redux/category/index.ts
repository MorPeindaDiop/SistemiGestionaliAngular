import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { CategoriesState } from "./category.reducers";

export const selectCategoriesState = (state: AppState) => state.categoriesState;

export const selectCategories = createSelector(
    selectCategoriesState,
    (state: CategoriesState) => state.categories
);