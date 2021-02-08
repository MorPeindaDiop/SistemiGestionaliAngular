import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initItems, retrieveAllItems } from './item.actions';

@Injectable()
export class ItemsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllSkills(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("item/findAll")
    }

    // createSkill(skill: Skill): Observable<Response> {
    //     return this.http.retrievePostCall<Response>("skill/create", skill)
    // }

    // deleteSkill(id: number): Observable<Response> {
    //     return this.http.retrievePostCall<Response>("skill/delete", id)
    // }

    getAllSkills$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllItems),
        switchMap(() => this.retreiveAllSkills().pipe(
            map((response) => initItems({ response }))
        ))
    ));

    // createSkill$ = createEffect(() => this.actions$.pipe(
    //     ofType(createSkill),
    //     switchMap(skill => this.createSkill(skill.skill).pipe(
    //         map(() => retrieveAllSkills()),
    //     )
    //     ))
    // );

    // deleteSkill$ = createEffect(() => this.actions$.pipe(
    //     ofType(deleteSkill),
    //     switchMap(id => this.deleteSkill(id.id).pipe(
    //         map(() => retrieveAllSkills()),
    //     )
    //     ))
    // );

}