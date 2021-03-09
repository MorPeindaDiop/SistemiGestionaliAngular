import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { Invoice } from 'src/app/core/model/invoice';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Item } from 'src/app/core/model/item';
import { selectClients } from 'src/app/redux/cliente';
import { selectProvisionalInvoicesDetail } from 'src/app/redux/invoiceDetail';
import { selectProvisionalInvoiceSummary } from 'src/app/redux/invoiceSummary';
import { selectItems } from 'src/app/redux/item';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnChanges {

  invoiceMasterForm: FormGroup;
  invoiceDetailForm: FormGroup;
  invoiceSummaryForm: FormGroup;

  provisionalInvoiceSummary: InvoiceSummary;
  listToSave: InvoiceDetail[] = [];

  public dateValue: Date = new Date();

  tailDiscount: number = 0;

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router, private store: Store) {

    this.invoiceService.retrieveAllClients();
    this.invoiceService.retrieveAllItems();

    this.invoiceService.retrieveAllInvoicesMaster();
    this.invoiceService.retrieveAllInvoicesDetail();
    this.invoiceService.retrieveAllInvoicesSummary();
    
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log("sono dentro on change")
    console.log(changes.invoiceMasterForm)
    throw new Error('Method not implemented.');
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
    this.onChanges();
  }

  onChanges(): void {
    this.invoiceSummaryForm.valueChanges.subscribe(val => {
      console.log("prova")
      console.log(val)
      if (this.tailDiscount != val.tailDiscount && val.tailDiscount != 0) {

        this.tailDiscount = val.tailDiscount
        console.log(this.tailDiscount)

        //invoiceMaster
        let invoiceMaster: InvoiceMaster = {
          ...this.invoiceMasterForm.value
        }

        //invoiceDetailList
        this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
          for (let invoiceDetail of provisionalInvoiceDetailList) {
            this.listToSave.push(invoiceDetail)
          }
        })

        //invoiceSummary
        let invoiceSummary: InvoiceSummary = {
          ...this.invoiceSummaryForm.value
        }

        //invoice
        let invoice: Invoice = {
          invoiceMaster: invoiceMaster,
          invoiceDetailList: this.listToSave,
          invoiceSummary: invoiceSummary
        }

        this.invoiceService.calculateProvisionalTailDiscount(invoice);
        this.compileSummaryForm();
      }
    });

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
        this.listToSave.push(invoiceDetail)
      }
      return this.listToSave
    })
    this.invoiceService.calculateProvisionalInvoiceSummary(this.listToSave)
    await this.delay(500);
    this.compileSummaryForm();
  }

  async compileSummaryForm() {
    console.log("ok")
    this.store.pipe(select(selectProvisionalInvoiceSummary)).subscribe(invoiceSummary => { return this.provisionalInvoiceSummary = invoiceSummary });
    this.invoiceSummaryForm.patchValue(
      this.provisionalInvoiceSummary
    )
  }

  save() {
    //invoiceMaster
    let invoiceMaster: InvoiceMaster = {
      ...this.invoiceMasterForm.value
    }

    //invoiceDetailList
    this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        this.listToSave.push(invoiceDetail)
      }
      return this.listToSave
    })

    //invoiceSummary
    let invoiceSummary: InvoiceSummary = {
      ...this.invoiceSummaryForm.value
    }


    //invoice
    let invoice: Invoice = {
      invoiceMaster: invoiceMaster,
      invoiceDetailList: this.listToSave,
      invoiceSummary: invoiceSummary
    }

    this.invoiceService.createInvoice(invoice);
    this.router.navigateByUrl('/invoices');

  }

  deletePrevisionalInvoiceDetail(invoiceDetail: InvoiceDetail) {
    this.invoiceService.deleteProvisionalInvoiceDetail(invoiceDetail);
  }

  deleteProvisionalCalculations() {
    this.invoiceService.deleteProvisionalCalculations();
    this.router.navigateByUrl('/invoices');
  }

  editPrevisionalInvoiceDetail(invoiceDetail: InvoiceDetail) {
    this.invoiceDetailForm.patchValue(
      invoiceDetail
    )
  }

  prova() {
    console.log("prova")
  }

}
