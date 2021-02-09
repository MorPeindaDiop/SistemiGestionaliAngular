import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/model/category';
import { Response } from 'src/app/core/model/response';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  response: Observable<Response>;
  error: String = "";
  
  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) {
    console.log('costruttore category')
    //console.log(this.urlPath)

    this.response = this.categoriesService.retreiveAllCategories()

    console.log(this.response)

    this.response.subscribe(
      response => {
        this.categories = response.result;
        console.log(this.categories)
      },
      error => {
        this.error = error.error
        console.log(this.error)
      }
      
    )
   }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  delete(category: Category) {
    console.log('delete')
    console.log(category)
    this.categoriesService.deleteCategory(category)
  }

}
