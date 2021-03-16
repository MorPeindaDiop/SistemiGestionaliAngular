import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { Payment } from 'src/app/core/model/payment';
import { selectPayments } from 'src/app/redux/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  constructor(private store: Store, private paymentsService: PaymentService, private router: Router) {
    this.paymentsService.retrieveAllPayments();
  }

  ngOnInit(): void {
    this.paymentsService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    };
  }

  get payments(): Observable<Payment[]> {
    return this.store.pipe(select(selectPayments));
  }

  delete(payments: Payment) {
    console.log('delete')
    this.paymentsService.deletePayment(payments);
  }

  goToDetail(codPayment: String) {
    this.router.navigateByUrl("/payments/detail/" + codPayment)
  }


}
