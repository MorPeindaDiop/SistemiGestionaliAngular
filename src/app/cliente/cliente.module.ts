import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './main/cliente.component';
import { SharedModule } from '../shared/shared.module';

import { ClientsService } from './services/clients.service';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';


@NgModule({
  declarations: [ClienteComponent],
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
