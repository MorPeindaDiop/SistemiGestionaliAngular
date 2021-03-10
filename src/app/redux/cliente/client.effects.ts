import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initClients, retrieveAllClients, createClient, deleteClient } from './client.actions';
import { Client } from 'src/app/core/model/client';

@Injectable()
export class ClientsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllClients(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("client/findAll")
    }

    createClient(client: Client): Observable<Response> {
        return this.http.retrievePostCall<Response>("client/create", client)
    }

    deleteClient(client: Client): Observable<Response> {
        return this.http.retrievePostCall<Response>("client/delete", client)
    }

    getAllClients$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllClients),
        switchMap(() => this.retrieveAllClients().pipe(
            map((response) => initClients({ response }))
        ))
    ));

    createClient$ = createEffect(() => this.actions$.pipe(
        ofType(createClient),
        switchMap(client => this.createClient(client.client).pipe(
            map(() => retrieveAllClients()),
        )))
    );

    deleteClient$ = createEffect(() => this.actions$.pipe(
        ofType(deleteClient),
        switchMap(client => this.deleteClient(client.client).pipe(
            map(() => retrieveAllClients()),
        )))
    );

}