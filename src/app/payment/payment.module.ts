import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './main/payment.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PaymentComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
  ]
})
export class PaymentModule { }
