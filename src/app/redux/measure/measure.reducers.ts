import { Action, createReducer, on } from "@ngrx/store";
import { Measure } from "src/app/core/model/measure";
import { initMeasure } from './measure.actions';

export interface MeasuresState {
    measures: Measure[];
}

export const initialState: MeasuresState = {
    measures: []
};

const reducer = createReducer(
    initialState,
    on(initMeasure, (state, { response }) => ({ ...state, measures: response.result }))
);

export function measureReducer(state: MeasuresState | undefined, action: Action) {
    return reducer(state, action);
}