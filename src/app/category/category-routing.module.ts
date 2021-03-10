import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

import { CategoryComponent } from './main/category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'detail/:codCategory', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
