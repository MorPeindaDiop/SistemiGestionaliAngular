import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ClienteComponent } from './main/cliente.component';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'detail/:codClient', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
