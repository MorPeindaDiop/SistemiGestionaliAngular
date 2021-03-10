import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

import { VatComponent } from './main/vat.component';

const routes: Routes = [
  { path: '', component: VatComponent },
  { path: 'detail/:codVat', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatRoutingModule { }
