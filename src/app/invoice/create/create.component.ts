import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { Invoice } from 'src/app/core/model/invoice';
import { InvoiceDetail } from 'src/app/core/model/invoice-detail';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';
import { Item } from 'src/app/core/model/item';
import { Measure } from 'src/app/core/model/measure';
import { Vat } from 'src/app/core/model/vat';
import { selectClients } from 'src/app/redux/cliente';
import { selectProvisionalInvoicesDetail } from 'src/app/redux/invoiceDetail';
import { selectProvisionalInvoiceSummary } from 'src/app/redux/invoiceSummary';
import { selectItems } from 'src/app/redux/item';
import { selectMeasures } from 'src/app/redux/measure';
import { selectVat } from 'src/app/redux/vat';
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

  clientSelected: Client = null;
  itemSelected: Item = null;

  provisionalInvoiceSummary: InvoiceSummary;
  listToSave: InvoiceDetail[] = [];

  public dateValue: Date = new Date();

  tailDiscount: String = "";

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router, private store: Store, private modalService: NgbModal) {

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
      totalPrice: ['', Validators.required],
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
      totalTailDiscount: ['', Validators.required],
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
    console.log("on init");
    console.log(this.invoiceSummaryForm.value.tailDiscount);
    if (this.invoiceSummaryForm.value.tailDiscount != null && this.invoiceSummaryForm.value.tailDiscount != this.tailDiscount) {
      this.onChanges();
    }
  }

  onChanges(): void {
    this.invoiceSummaryForm.valueChanges.subscribe(val => {
      console.log("prova")
      console.log(val)
      //console.log(val.tailDiscount.changes)
      //if (val.tailDiscount != this.tailDiscount && val.tailDiscount != null ) {

        this.tailDiscount = val.tailDiscount
        console.log(this.tailDiscount)

        //invoiceMaster
        // let invoiceMaster: InvoiceMaster = {
        //   ...this.invoiceMasterForm.value
        // }

        //invoiceDetailList
        this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
          this.listToSave = provisionalInvoiceDetailList
        })

        //invoiceSummary
        let invoiceSummary: InvoiceSummary = {
          ...this.invoiceSummaryForm.value
        }

        //invoice
        let invoice: Invoice = {
          invoiceMaster: null,
          invoiceDetailList: this.listToSave,
          invoiceSummary: invoiceSummary
        }

        this.invoiceService.calculateProvisionalTailDiscount(invoice);
        this.compileSummaryForm();
      //}
    });

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async addProvisionalInvoiceDetail() {
    let invoiceDetail: InvoiceDetail = {
      codItem: this.itemSelected.codItem,
      description: this.itemSelected.description,
      measure: this.invoiceDetailForm.value.measure != "" ? this.invoiceDetailForm.value.measure: this.itemSelected.measure,
      quantity: this.invoiceDetailForm.value.quantity,
      lot: this.invoiceDetailForm.value.lot,
      expiry: this.invoiceDetailForm.value.expiry,
      unitPrice: this.invoiceDetailForm.value.unitPrice != "" ? this.invoiceDetailForm.value.unitPrice: this.itemSelected.price,
      totalPrice: this.invoiceDetailForm.value.totalPrice,
      discount: this.invoiceDetailForm.value.discount,
      totalDiscount: this.invoiceDetailForm.value.totaDiscount,
      taxable: this.invoiceDetailForm.value.taxable,
      codVat: this.invoiceDetailForm.value.codVat != "" ? this.invoiceDetailForm.value.codVat: this.itemSelected.vat,
      totalVat: this.invoiceDetailForm.value.totalVat,
      totalLine: this.invoiceDetailForm.value.totalLine,
      //...this.invoiceDetailForm.value
    }
    console.log("addProvisionalInvoiceDetail")
    console.log(invoiceDetail)
    this.invoiceService.calculateProvisionalInvoiceDetail(invoiceDetail);
    this.itemSelected = null;
    this.invoiceDetailForm.reset();

    await this.delay(200);
    this.calculateProvisionalInvoiceSummary();
  }

  async calculateProvisionalInvoiceSummary() {
    await this.delay(200);
    this.provisionalInvoiceDetailList.subscribe(provisionalInvoiceDetailList => {
      this.listToSave = [];
      for (let invoiceDetail of provisionalInvoiceDetailList) {
        this.listToSave.push(invoiceDetail)
      }
      return this.listToSave
    })
    this.invoiceService.calculateProvisionalInvoiceSummary(this.listToSave)
    await this.delay(200);
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
      codInvoice: null,
      invoiceNumber: this.invoiceMasterForm.value.invoiceNumber,
      client: this.clientSelected != null ? this.clientSelected.codClient : null,
      payment: this.invoiceMasterForm.value.payment,
      orderNumber: this.invoiceMasterForm.value.orderNumber,
      date: this.invoiceMasterForm.value.date
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

  addClientSelected(client: Client) {
    this.clientSelected = client;
  }
  
  addItemSelected(item: Item) {
    this.itemSelected = item;
  }

  prova() {
    console.log("prova")
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
