import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { selectRouteParams } from "../router";
import { MeasuresState } from "./measure.reducers";

export const selectMeasureState = (state: AppState) => state.measuresState;

export const selectMeasures = createSelector(
    selectMeasureState,
    (state: MeasuresState) => state.measures
);

export const getCurrentNavigatedMeasure = createSelector(
    selectMeasureState,
    selectRouteParams,
    (state: MeasuresState, params: Params) => state.measures.find(item => item.codMeasure === String(params['codMeasure']))
);