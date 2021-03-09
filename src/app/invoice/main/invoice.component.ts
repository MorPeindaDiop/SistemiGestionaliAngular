import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { InvoiceMaster } from 'src/app/core/model/invoice-master';
import { selectInvoicesMaster } from 'src/app/redux/invoiceMaster';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  constructor(private store: Store, private invoiceService: InvoiceService, private router: Router) {
    this.invoiceService.retrieveAllInvoicesMaster();
    this.invoiceService.retrieveAllInvoicesDetail();
    this.invoiceService.retrieveAllInvoicesSummary();
  }

  ngOnInit(): void {
    this.invoiceService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    };
  }

  get invoicesMaster(): Observable<InvoiceMaster[]> {
    return this.store.pipe(select(selectInvoicesMaster));
  }

  delete(codInvoice: number) {
    console.log('delete')
    this.invoiceService.deleteInvoice(codInvoice);
  }

  goToDetail(codInvoice: number) {
    this.router.navigateByUrl("/invoices/detail/" + codInvoice)
  }

}
