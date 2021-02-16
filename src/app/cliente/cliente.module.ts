import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './main/cliente.component';
import { SharedModule } from '../shared/shared.module';

import { ClientsService } from './services/clients.service';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ClienteComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  providers: [
    ClientsService
  ]
})
export class ClienteModule { }
