import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Payment } from 'src/app/core/model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private paymentsService: PaymentService, private router: Router, private store: Store) {
    
    this.paymentsService.retrieveAllPayments();
    // this.store.pipe().subscribe();
    
    this.paymentForm = this.fb.group({
      codPayment: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
    }

    )
  }

  ngOnInit(): void {
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
