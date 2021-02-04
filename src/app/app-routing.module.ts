import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }, { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) }, { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }, { path: 'measures', loadChildren: () => import('./measures/measures.module').then(m => m.MeasuresModule) }, { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
