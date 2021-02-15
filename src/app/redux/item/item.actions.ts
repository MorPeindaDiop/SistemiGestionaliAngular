import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/core/model/item';
import { Response } from 'src/app/core/model/response';

//all items
export const retrieveAllItems = createAction('[Item] items');
export const initItems = createAction('[Item] init items', props<{response: Response}>());

//create item
export const createItem = createAction('[Item] create items', props<{item: Item}>());

//delete item
export const deleteItem = createAction('[Item] delete items', props<{item: Item}>());