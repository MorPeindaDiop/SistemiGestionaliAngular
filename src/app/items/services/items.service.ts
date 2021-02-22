import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/core/model/item';
import { retrieveAllCategories } from 'src/app/redux/category/category.actions';
import { createItem, retrieveAllItems, deleteItem } from 'src/app/redux/item/item.actions';
import { retrieveAllMeasures } from 'src/app/redux/measure/measure.actions';
import { retrieveAllVat } from 'src/app/redux/vat/vat.actions';

@Injectable()
export class ItemsService {

  constructor(private store: Store) { }

  retrieveAllItems() {
    return this.store.dispatch(retrieveAllItems())
  }

  retrieveAllCategories() {
    return this.store.dispatch(retrieveAllCategories())
  }

  retrieveAllMeasures() {
    return this.store.dispatch(retrieveAllMeasures())
  }

  retrieveAllVat() {
    return this.store.dispatch(retrieveAllVat())
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
