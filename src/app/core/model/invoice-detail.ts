export interface InvoiceDetail {
    codInvoice : String;
    line : number;
    codItem : String;
    description : String;
    measure : String;
    quantity : number;
    lot : String;
    expiry: Date;
    unitPrice: number;
    discount: number;
    totalDiscount: number;
    textable: number;
    codVat: String;
    totalVat: number;
    totalLine: number;
}
