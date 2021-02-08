import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/core/model/item';
import { Response } from 'src/app/core/model/response';

//all skills
export const retrieveAllItems = createAction('[Item] items');
export const initItems = createAction('[Item] init items', props<{response: Response}>());

//create skill
export const createSkill = createAction('[Item] create items', props<{item: Item}>());

//delete skill
export const deleteSkill = createAction('[Item] delete items', props<{item: Item}>());