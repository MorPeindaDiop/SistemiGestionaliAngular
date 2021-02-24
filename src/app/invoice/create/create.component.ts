import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Item } from 'src/app/core/model/item';
import { selectClients } from 'src/app/redux/cliente';
import { selectProvisionalInvoicesDetail } from 'src/app/redux/invoiceDetail';
import { selectCurrentInvoiceMaster } from 'src/app/redux/invoiceMaster';
import { selectProvisionalInvoiceSummary } from 'src/app/redux/invoiceSummary';
import { selectItems } from 'src/app/redux/item';
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

  provisionalInvoiceSummary: InvoiceSummary;
  listToSave: InvoiceDetail[] = [];

  public dateValue: Date = new Date();

  
  constructor(private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router, private store: Store) {
    
    this.invoiceService.retrieveAllClients();
    this.invoiceService.retrieveAllItems();
    
    this.invoiceMasterForm = this.fb.group({
      invoiceNumber: ['', Validators.required],
      client: ['', Validators.required],
      payment: ['', Validators.required],
      orderNumber: ['', Validators.required],
      date: [new Date(), Validators.required]
    })

    this.invoiceDetailForm = this.fb.group({
      codItem: ['', Validators.required],
      description: ['', Validators.required],
      measure: ['', Validators.required],
      quantity: ['', Validators.required],
      lot: ['', Validators.required],
      expiry: ['', Validators.required],
      unitPrice: ['', Validators.required],
      discount: ['', Validators.required],
      totalDiscount: ['', Validators.required],
      taxable: ['', Validators.required],
      codVat: ['', Validators.required],
      totalVat: ['', Validators.required],
      totalLine: ['', Validators.required],
    })
    
    this.invoiceSummaryForm = this.fb.group({
      // codInvoice: ['', Validators.required],
      totalAmount: ['', Validators.required],
      totalProducts: ['', Validators.required],
      totalServices: ['', Validators.required],
      tailDiscount: ['', Validators.required],
      totalTileDiscount: ['', Validators.required],
      totalLineDiscount: ['', Validators.required],
      totalDiscount: ['', Validators.required],
      totalVat: ['', Validators.required],
      taxable: ['', Validators.required],
    })
    
  }

  get clients(): Observable<Client[]> {
    return this.store.pipe(select(selectClients));
  }
  
  get items(): Observable<Item[]> {
    return this.store.pipe(select(selectItems));
  }
  
  get provisionalInvoiceDetailList(): Observable<InvoiceDetail[]> {
    return this.store.pipe(select(selectProvisionalInvoicesDetail));
  }
  
  ngOnInit(): void {
  }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    
  async addProvisionalInvoiceDetail() {
    let invoiceDetail: InvoiceDetail = {
      ...this.invoiceDetailForm.value
    }
    this.invoiceService.calculateProvisionalInvoiceDetail(invoiceDetail)
    this.invoiceDetailForm.reset();

    await this.delay(500);
    this.calculateProvisionalInvoiceSummary();
  }
  
  async calculateProvisionalInvoiceSummary() {
    await this.delay(500);
    this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
      this.listToSave = [];
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        let invoiceDetailWithCod: InvoiceDetail = {
          codItem: invoiceDetail.codItem,
          description: invoiceDetail.description,
          measure: invoiceDetail.measure,
          quantity: invoiceDetail.quantity,
          lot: invoiceDetail.lot,
          expiry: invoiceDetail.expiry,
          unitPrice: invoiceDetail.unitPrice,
          discount: invoiceDetail.discount,
          totalDiscount: invoiceDetail.totalDiscount,
          taxable: invoiceDetail.taxable,
          codVat: invoiceDetail.codVat,
          totalVat: invoiceDetail.totalVat,
          totalLine: invoiceDetail.totalLine
        }
        this.listToSave.push(invoiceDetailWithCod)
      }
      return this.listToSave
    })
    this.invoiceService.calculateProvisionalInvoiceSummary(this.listToSave)
    await this.delay(500);
    this.compileSummaryForm();
  }

  async compileSummaryForm() {
    console.log("ok")
    this.store.pipe(select(selectProvisionalInvoiceSummary)).subscribe(invoiceSummary => {return this.provisionalInvoiceSummary = invoiceSummary});
    this.invoiceSummaryForm.patchValue(
      this.provisionalInvoiceSummary
    )
  }
  
  saveInvoiceMaster() {
    let invoiceMaster: InvoiceMaster = {
      ...this.invoiceMasterForm.value
    }
    this.invoiceService.createInvoiceMaster(invoiceMaster);
  }

  saveInvoiceDetail() {
    this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        let invoiceDetailWithCod: InvoiceDetail = {
          codItem: invoiceDetail.codItem,
          description: invoiceDetail.description,
          measure: invoiceDetail.measure,
          quantity: invoiceDetail.quantity,
          lot: invoiceDetail.lot,
          expiry: invoiceDetail.expiry,
          unitPrice: invoiceDetail.unitPrice,
          discount: invoiceDetail.discount,
          totalDiscount: invoiceDetail.totalDiscount,
          taxable: invoiceDetail.taxable,
          codVat: invoiceDetail.codVat,
          totalVat: invoiceDetail.totalVat,
          totalLine: invoiceDetail.totalLine
        }
        this.listToSave.push(invoiceDetailWithCod)
      }
      return this.listToSave
    })
    console.log("listToSave")
    console.log(this.listToSave)
    if (this.listToSave != []) {
      this.invoiceService.createInvoiceDetail(this.listToSave);
    }
  }

  saveInvoiceSummary() {
    let invoiceSummary: InvoiceSummary = {
      ...this.invoiceSummaryForm.value
    }
    console.log(invoiceSummary)
    this.invoiceService.createInvoiceSummary(invoiceSummary);
    this.router.navigateByUrl('/invoices');
  }

}
