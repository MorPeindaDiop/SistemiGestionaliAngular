import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { Invoice } from 'src/app/core/model/invoice';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Item } from 'src/app/core/model/item';
import { selectClients } from 'src/app/redux/cliente';
import { getCurrentNavigatedInvoiceDetail, selectInvoicesDetail, selectProvisionalInvoicesDetail } from 'src/app/redux/invoiceDetail';
import { getCurrentNavigatedInvoiceMaster, selectInvoicesMaster } from 'src/app/redux/invoiceMaster';
import { getCurrentNavigatedInvoiceSummary, selectInvoicesSummary, selectProvisionalInvoiceSummary } from 'src/app/redux/invoiceSummary';
import { selectItems } from 'src/app/redux/item';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  invoiceMasterForm: FormGroup;
  invoiceDetailForm: FormGroup;
  invoiceSummaryForm: FormGroup;

  invoiceMaster: InvoiceMaster;
  invoiceDetailList: InvoiceDetail[] = [];
  invoiceSummary: InvoiceSummary;

  public dateValue: Date = new Date();

  constructor(private store: Store, private invoiceService: InvoiceService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.invoiceService.retrieveAllClients();
    this.invoiceService.retrieveAllItems();

    this.invoiceService.retrieveAllInvoicesMaster();
    this.invoiceService.retrieveAllInvoicesDetail();
    this.invoiceService.retrieveAllInvoicesSummary();

    this.store.pipe(select(selectInvoicesMaster)).subscribe(invoicesMaster => {
      for (let invoiceMaster of invoicesMaster) {
        if (invoiceMaster.codInvoice === Number(this.activatedRoute.snapshot.paramMap.get('codInvoice'))) {
          this.invoiceMaster = invoiceMaster
          console.log("master");
          console.log(this.invoiceMaster)
        }
      }
    })

    this.store.pipe(select(selectInvoicesDetail)).subscribe(invoicesDetail => {
      for (let invoiceDetail of invoicesDetail) {
        if (invoiceDetail.codInvoice === Number(this.activatedRoute.snapshot.paramMap.get('codInvoice'))) {
          this.invoiceDetailList.push(invoiceDetail)
          console.log("detail");
          console.log(this.invoiceDetailList)
        }
      }
    })

    this.store.pipe(select(selectInvoicesSummary)).subscribe(invoicesSummary => {
      for (let invoiceSummary of invoicesSummary) {
        if (invoiceSummary.codInvoice === Number(this.activatedRoute.snapshot.paramMap.get('codInvoice'))) {
          this.invoiceSummary = invoiceSummary
          console.log("summary");
          console.log(this.invoiceSummary)
        }
      }
    })

    this.invoiceService.editInvoiceDetailList(this.invoiceDetailList)

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
      codInvoice: ['', Validators.required],
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
    this.invoiceMasterForm.patchValue(
      this.invoiceMaster
    )

    this.invoiceSummaryForm.patchValue(
      this.invoiceSummary
    )

    console.log("...this.invoiceMasterForm.value on init");
    console.log(this.invoiceMasterForm.value);
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
      this.invoiceDetailList = [];
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        this.invoiceDetailList.push(invoiceDetail)
      }
      return this.invoiceDetailList
    })
    this.invoiceService.calculateProvisionalInvoiceSummary(this.invoiceDetailList)
    await this.delay(500);
    this.compileSummaryForm();
  }

  async compileSummaryForm() {
    console.log("ok")
    this.store.pipe(select(selectProvisionalInvoiceSummary)).subscribe(invoiceSummary => { return this.invoiceSummary = invoiceSummary });
    this.invoiceSummaryForm.patchValue(
      this.invoiceSummary
    )

    console.log("...this.invoiceMasterForm.value");
    console.log(this.invoiceMasterForm.value);
  }

  save() {

    console.log("save");
    //invoiceMaster
    let invoiceMaster: InvoiceMaster = {
      ...this.invoiceMasterForm.value
    }
    console.log("master");
    console.log(invoiceMaster);

    // invoiceDetailList
    this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        this.invoiceDetailList.push(invoiceDetail)
      }
      return this.invoiceDetailList
    })

    //invoiceSummary
    let invoiceSummary: InvoiceSummary = {
      ...this.invoiceSummaryForm.value
    }


    // invoice
    let invoice: Invoice = {
      invoiceMaster: invoiceMaster,
      invoiceDetailList: this.invoiceDetailList,
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

}
