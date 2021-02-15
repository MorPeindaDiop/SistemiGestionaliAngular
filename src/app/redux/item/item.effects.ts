import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initItems, retrieveAllItems, createItem, deleteItem } from './item.actions';
import { Item } from 'src/app/core/model/item';

@Injectable()
export class ItemsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllItems(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("item/findAll")
    }

    createItem(item: Item): Observable<Response> {
        return this.http.retrievePostCall<Response>("item/create", item)
    }

    deleteItem(item: Item): Observable<Response> {
        return this.http.retrievePostCall<Response>("item/delete", item)
    }

    getAllItems$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllItems),
        switchMap(() => this.retrieveAllItems().pipe(
            map((response) => initItems({ response }))
        ))
    ));

    createItem$ = createEffect(() => this.actions$.pipe(
        ofType(createItem),
        switchMap(item => this.createItem(item.item).pipe(
            map(() => retrieveAllItems()),
        )))
    );

    deleteItem$ = createEffect(() => this.actions$.pipe(
        ofType(deleteItem),
        switchMap(item => this.deleteItem(item.item).pipe(
            map(() => retrieveAllItems()),
        )))
    );

}