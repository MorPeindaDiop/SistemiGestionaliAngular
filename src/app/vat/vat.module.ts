import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatRoutingModule } from './vat-routing.module';
import { VatComponent } from './main/vat.component';
import { DataTablesModule } from 'angular-datatables';
import { VatsService } from './services/vat.service';


@NgModule({
  declarations: [VatComponent],
  imports: [
    CommonModule,
    VatRoutingModule,
    DataTablesModule
  ],
  providers: [
    VatsService
  ]
})
export class VatModule { }
