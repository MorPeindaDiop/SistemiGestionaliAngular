import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { MeasuresState } from "./measure.reducers";

export const selectMeasureState = (state: AppState) => state.measureState;

export const selectMeasures = createSelector(
    selectMeasureState,
    (state: MeasuresState) => state.measure
);

export const getCurrentNavigatedMeasure = createSelector(
    selectMeasureState,
    selectRouteParams,
    (state: MeasuresState, params: Params) => state.measure.find(item => item.codMeasure === String(params['codMeasure']))
);