import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './main/category.component';
import { DataTablesModule } from 'angular-datatables';
import { CategoriesService } from './services/categories.service';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    DataTablesModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoryModule { }
