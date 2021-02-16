import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initVat, retrieveAllVat, createVat, deleteVat } from './vat.actions';
import { Vat } from 'src/app/core/model/vat';

@Injectable()
export class VatEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retrieveAllVat(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("vat/findAll")
    }

    createVat(vat: Vat): Observable<Response> {
        return this.http.retrievePostCall<Response>("vat/create", vat)
    }

    deleteVat(vat: Vat): Observable<Response> {
        return this.http.retrievePostCall<Response>("vat/delete", vat)
    }

    getAllVat$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllVat),
        switchMap(() => this.retrieveAllVat().pipe(
            map((response) => initVat({ response }))
        ))
    ));

    createVat$ = createEffect(() => this.actions$.pipe(
        ofType(createVat),
        switchMap(vat => this.createVat(vat.vat).pipe(
            map(() => retrieveAllVat()),
        )))
    );

    deleteVat$ = createEffect(() => this.actions$.pipe(
        ofType(deleteVat),
        switchMap(vat => this.deleteVat(vat.vat).pipe(
            map(() => retrieveAllVat()),
        )))
    );

}