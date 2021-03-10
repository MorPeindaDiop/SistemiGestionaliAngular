import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Client } from 'src/app/core/model/client';
import { createClient, deleteClient, retrieveAllClients } from 'src/app/redux/cliente/client.actions';

@Injectable()
export class ClientsService {

  constructor(private store: Store) { }

  retrieveAllClients() {
    return this.store.dispatch(retrieveAllClients())
  }

  createClient(client: Client) {
    return this.store.dispatch(createClient({ client }))
  }

  deleteClient(client: Client) {
    return this.store.dispatch(deleteClient({ client }))
  }

}
