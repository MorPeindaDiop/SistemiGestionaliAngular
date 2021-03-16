import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Payment } from 'src/app/core/model/payment';
import { selectPayments } from 'src/app/redux/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private paymentsService: PaymentService, private router: Router) {
    this.paymentForm = this.fb.group({
      codPayment: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {

    this.paymentsService.retrieveAllPayments();

    this.store.pipe(select(selectPayments)).subscribe(payments => {
      for (let payment of payments) {
        if (payment.codPayment === this.activatedRoute.snapshot.paramMap.get('codPayment')) {
          this.paymentForm.patchValue(
            payment
          )
        }
      }
    })
  }

  save() {
    let payment: Payment = {
      ...this.paymentForm.value
    }
    console.log(payment)
    this.paymentsService.createPayment(payment);
    this.router.navigateByUrl('/payments');
  }


}
