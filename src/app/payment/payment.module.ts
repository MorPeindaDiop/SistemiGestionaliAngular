import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './main/payment.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [PaymentComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
