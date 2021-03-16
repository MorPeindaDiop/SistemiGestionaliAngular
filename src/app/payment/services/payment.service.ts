import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Payment } from 'src/app/core/model/payment';

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
