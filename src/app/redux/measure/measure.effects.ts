import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initMeasure, retrieveAllMeasures, createMeasure, deleteMeasure } from './measure.actions';
import { Measure } from 'src/app/core/model/measure';

@Injectable()
export class MeasuresEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllMeasures(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("measure/findAll")
    }

    createMeasure(measure: Measure): Observable<Response> {
        return this.http.retrievePostCall<Response>("measure/create", measure)
    }

    deleteMeasure(measure: Measure): Observable<Response> {
        return this.http.retrievePostCall<Response>("measure/delete", measure)
    }

    getAllMeasures$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllMeasures),
        switchMap(() => this.retrieveAllMeasures().pipe(
            map((response) => initMeasure({ response }))
        ))
    ));

    createMeasure$ = createEffect(() => this.actions$.pipe(
        ofType(createMeasure),
        switchMap(measure => this.createMeasure(measure.measure).pipe(
            map(() => retrieveAllMeasures()),
        )))
    );

    deleteMeasure$ = createEffect(() => this.actions$.pipe(
        ofType(deleteMeasure),
        switchMap(measure => this.deleteMeasure(measure.measure).pipe(
            map(() => retrieveAllMeasures()),
        )))
    );

}