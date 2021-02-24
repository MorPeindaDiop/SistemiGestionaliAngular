export interface InvoiceDetail {
    codInvoice?: number;
    line?: number;
    codItem?: String;
    description?: String;
    measure?: String;
    quantity?: number;
    lot?: String;
    expiry?: Date;
    unitPrice?: number;
    discount?: number;
    totalDiscount?: number;
    taxable?: number;
    codVat?: String;
    totalVat?: number;
    totalLine?: number;
}
