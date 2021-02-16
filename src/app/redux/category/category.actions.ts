import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/core/model/category';
import { Response } from 'src/app/core/model/response';

//all categories
export const retrieveAllCategories = createAction('[Category] category');
export const initCategories = createAction('[Category] init category', props<{response: Response}>());

//create category
export const createCategory = createAction('[Category] create category', props<{category: Category}>());

//delete category
export const deleteCategory = createAction('[Category] delete category', props<{category: Category}>());