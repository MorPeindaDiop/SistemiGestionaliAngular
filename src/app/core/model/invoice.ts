import { InvoiceMaster } from './invoice-master';
import { InvoiceDetail } from './invoice-detail';
import { InvoiceSummary } from './invoice-summary';

export interface Invoice {
    invoiceMaster: InvoiceMaster;
    invoiceDetailList: InvoiceDetail[];
    invoiceSummary: InvoiceSummary;
}
