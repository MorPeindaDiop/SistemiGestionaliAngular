import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initCategories, retrieveAllCategories, createCategory, deleteCategory } from './category.actions';
import { Category } from 'src/app/core/model/category';

@Injectable()
export class CategoriesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllCategories(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("category/findAll")
    }

    createCategory(category: Category): Observable<Response> {
        return this.http.retrievePostCall<Response>("category/create", category)
    }

    deleteCategory(category: Category): Observable<Response> {
        return this.http.retrievePostCall<Response>("category/delete", category)
    }

    getAllCategories$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCategories),
        switchMap(() => this.retrieveAllCategories().pipe(
            map((response) => initCategories({ response }))
        ))
    ));

    createCategory$ = createEffect(() => this.actions$.pipe(
        ofType(createCategory),
        switchMap(category => this.createCategory(category.category).pipe(
            map(() => retrieveAllCategories()),
        )))
    );

    deleteCategory$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCategory),
        switchMap(category => this.deleteCategory(category.category).pipe(
            map(() => retrieveAllCategories()),
        )))
    );

}