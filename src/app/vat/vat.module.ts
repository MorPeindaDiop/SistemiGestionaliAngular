import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatRoutingModule } from './vat-routing.module';
import { VatComponent } from './main/vat.component';


@NgModule({
  declarations: [VatComponent],
  imports: [
    CommonModule,
    VatRoutingModule
  ]
})
export class VatModule { }
