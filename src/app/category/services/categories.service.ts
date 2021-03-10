import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/core/model/category';
import { createCategory, deleteCategory, retrieveAllCategories } from 'src/app/redux/category/category.actions';

@Injectable()
export class CategoriesService {

  constructor(private store: Store) { }

  retrieveAllCategories() {
    return this.store.dispatch(retrieveAllCategories())
  }

  createCategory(category: Category) {
    return this.store.dispatch(createCategory({ category }))
  }

  deleteCategory(category: Category) {
    return this.store.dispatch(deleteCategory({ category }))
  }

}
