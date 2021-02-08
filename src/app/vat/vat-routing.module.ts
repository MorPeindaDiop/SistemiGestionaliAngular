import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VatComponent } from './main/vat.component';

const routes: Routes = [{ path: '', component: VatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatRoutingModule { }
