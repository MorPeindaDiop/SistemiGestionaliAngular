import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';


@NgModule({
  declarations: [InvoiceMasterComponent, InvoiceDetailComponent, InvoiceSummaryComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
