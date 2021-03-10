import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { InvoiceComponent } from './main/invoice.component';
import { InvoiceService } from './services/invoice.service';
import { ClienteModule } from '../cliente/cliente.module';


@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    ClienteModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
