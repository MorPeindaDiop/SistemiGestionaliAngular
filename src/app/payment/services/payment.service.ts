import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Payment } from 'src/app/core/model/payment';
import { createPayment, deletePayment, retrieveAllPayments } from 'src/app/redux/payment/payment.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private store: Store) { }

  retrieveAllPayments() {
    return this.store.dispatch(retrieveAllPayments())
  }

  createPayment(payment: Payment) {
    return this.store.dispatch(createPayment({ payment }))
  }

  deletePayment(payment: Payment) {
    return this.store.dispatch(deletePayment({ payment }))
  }
}
