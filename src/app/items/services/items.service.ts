import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { retrieveAllItems } from 'src/app/redux/item/item.actions';

@Injectable()
export class ItemsService {

  constructor(private store: Store) { }

  retreiveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }

}
