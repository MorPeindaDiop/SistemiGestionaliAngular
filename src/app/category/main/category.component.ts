import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/core/model/category';
import { selectCategories } from 'src/app/redux/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  constructor(private store: Store, private categoriesService: CategoriesService, private router: Router) {
    this.categoriesService.retrieveAllCategories();
  }

  ngOnInit(): void {
    this.categoriesService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    };
  }

  get categories(): Observable<Category[]> {
    return this.store.pipe(select(selectCategories));
  }

  delete(categories: Category) {
    console.log('delete')
    this.categoriesService.deleteCategory(categories);
  }

  goToDetail(codCategory: String) {
    this.router.navigateByUrl("/categories/detail/" + codCategory)
  }

}
