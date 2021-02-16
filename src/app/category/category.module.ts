import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './main/category.component';
import { DataTablesModule } from 'angular-datatables';
import { CategoriesService } from './services/categories.service';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CategoryComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    DataTablesModule,
    SharedModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoryModule { }
