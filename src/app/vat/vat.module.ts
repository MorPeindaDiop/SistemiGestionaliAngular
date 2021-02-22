import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatRoutingModule } from './vat-routing.module';
import { VatComponent } from './main/vat.component';
import { DataTablesModule } from 'angular-datatables';
import { VatsService } from './services/vat.service';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VatComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    VatRoutingModule,
    SharedModule
  ],
  providers: [
    VatsService
  ]
})
export class VatModule { }
