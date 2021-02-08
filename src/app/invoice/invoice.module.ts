import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InvoiceMasterComponent, InvoiceDetailComponent, InvoiceSummaryComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule
  ]
})
export class InvoiceModule { }
