import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceMasterComponent } from './invoice-master/invoice-master.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';


@NgModule({
  declarations: [InvoiceComponent, InvoiceMasterComponent, InvoiceDetailComponent, InvoiceSummaryComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
