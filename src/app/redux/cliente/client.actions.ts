import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/core/model/client';
import { Response } from 'src/app/core/model/response';

//all clients
export const retrieveAllClients = createAction('[Client] client');
export const initClients = createAction('[Client] init client', props<{response: Response}>());

//create client
export const createClient = createAction('[Client] create client', props<{client: Client}>());

//delete client
export const deleteClient = createAction('[Client] delete client', props<{client: Client}>());