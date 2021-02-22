import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  invoiceMasterForm: FormGroup;
  invoiceDetailForm: FormGroup;
  invoiceSummaryForm: FormGroup;

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router) {
    
    this.invoiceMasterForm = this.fb.group({
      codInvoice: ['', Validators.required],
      invoiceNumber: ['', Validators.required],
      client: ['', Validators.required],
      payment: ['', Validators.required],
      orderNumber: ['', Validators.required],
      date: [new Date(), Validators.required]
    })

    this.invoiceDetailForm = this.fb.group({
      codInvoice: ['', Validators.required],
      line: ['', Validators.required],
      codItem: ['', Validators.required],
      description: ['', Validators.required],
      measure: ['', Validators.required],
      quantity: ['', Validators.required],
      lot: ['', Validators.required],
      expiry: ['', Validators.required],
      unitPrice: ['', Validators.required],
      discount: ['', Validators.required],
      totalDiscount: ['', Validators.required],
      textable: ['', Validators.required],
      codVat: ['', Validators.required],
      totalVat: ['', Validators.required],
      totalLine: ['', Validators.required],
    })

    this.invoiceSummaryForm = this.fb.group({
      codClient: ['', Validators.required],
      businessName: ['', Validators.required],
      piva: ['', Validators.required],
      fiscalCod: ['', Validators.required],
      mail: ['', Validators.required],
      tel: ['', Validators.required],
      cel: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      province: ['', Validators.required],
      cap: ['', Validators.required],
    })
    
  }

  ngOnInit(): void {
  }

  saveInvoiceMaster() {
    let invoiceMaster: InvoiceMaster = {
      ...this.invoiceMasterForm.value
    }
    this.invoiceService.createInvoiceMaster(invoiceMaster);
    this.router.navigateByUrl('/invoices');
  }

  saveInvoiceDetail() {
    let invoiceDetail: InvoiceDetail = {
      ...this.invoiceDetailForm.value
    }
    this.invoiceService.createInvoiceDetail(invoiceDetail);
    //this.router.navigateByUrl('/invoices');
  }

  saveInvoiceSummary() {
    let invoiceSummary: InvoiceSummary = {
      ...this.invoiceMasterForm.value
    }
    this.invoiceService.createInvoiceSummary(invoiceSummary);
    //this.router.navigateByUrl('/invoices');
  }

}
