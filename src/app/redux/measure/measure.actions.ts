import { createAction, props } from '@ngrx/store';
import { Measure } from 'src/app/core/model/measure';
import { Response } from 'src/app/core/model/response';

//all measure
export const retrieveAllMeasures = createAction('[Measure] measure');
export const initMeasure = createAction('[Measure] init measure', props<{response: Response}>());

//create measure
export const createMeasure = createAction('[Measure] create measure', props<{measure: Measure}>());

//delete measure
export const deleteMeasure = createAction('[Measure] delete measure', props<{measure: Measure}>());