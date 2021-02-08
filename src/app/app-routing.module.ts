import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },
  { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'clients', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'invoices', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'measures', loadChildren: () => import('./measures/measures.module').then(m => m.MeasuresModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
