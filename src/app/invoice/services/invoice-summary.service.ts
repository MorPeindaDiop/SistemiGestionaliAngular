import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { InvoiceSummary } from 'src/app/core/model/invoice-summary';

@Injectable()
export class InvoiceSummaryService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllInvoice(): Observable<Response> {
    console.log("sono dentro alla chiamata all invoice summary")
    return this.http.retrieveGetCall<Response>("invoice/summary/findAll")
  }

  createItem(invoiceSummary: InvoiceSummary): Observable<Response> {
    console.log("sono dentro alla chiamata create invoice summary")
    return this.http.retrievePostCall<Response>("invoice/summary/create", invoiceSummary)
  }

  deleteItem(invoiceSummary: InvoiceSummary): Observable<Response> {
    console.log("sono dentro alla chiamata delete invoice summary")
    console.log(JSON.stringify(invoiceSummary))
    return this.http.retrievePostCall<Response>("invoice/summary/delete", invoiceSummary)
  }

}
