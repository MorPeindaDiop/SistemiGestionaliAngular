import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Vat } from 'src/app/core/model/vat';
import { createVat, deleteVat, retrieveAllVat } from 'src/app/redux/vat/vat.actions';

@Injectable()
export class VatsService {

  constructor(private store: Store) { }

  retrieveAllVat() {
    return this.store.dispatch(retrieveAllVat())
  }

  createVat(vat: Vat) {
    return this.store.dispatch(createVat({vat}))
  }

  deleteVat(vat: Vat) {
    return this.store.dispatch(deleteVat({vat}))
  }

}
