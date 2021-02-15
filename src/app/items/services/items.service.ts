import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/core/model/item';
import { createItem, retrieveAllItems, deleteItem } from 'src/app/redux/item/item.actions';

@Injectable()
export class ItemsService {

  constructor(private store: Store) { }

  retrieveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }

  createItem(item: Item) {
    console.log("sono dentro alla chiamata create")
    return this.store.dispatch(createItem({item}))
  }

  deleteItem(item: Item) {
    console.log("sono dentro alla chiamata delete")
    return this.store.dispatch(deleteItem({item}))
  }

}
