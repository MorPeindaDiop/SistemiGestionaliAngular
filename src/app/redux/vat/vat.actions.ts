import { createAction, props } from '@ngrx/store';
import { Vat } from 'src/app/core/model/vat';
import { Response } from 'src/app/core/model/response';

//all vat
export const retrieveAllVat = createAction('[Vat] vat');
export const initVat = createAction('[Vat] init vat', props<{response: Response}>());

//create vat
export const createVat = createAction('[Vat] create vat', props<{vat: Vat}>());

//delete vat
export const deleteVat = createAction('[Vat] delete vat', props<{vat: Vat}>());