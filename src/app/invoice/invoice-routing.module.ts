import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { InvoiceComponent } from './main/invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent },
  { path: 'detail/:codInvoice', component: CreateComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
