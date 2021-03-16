export interface InvoiceSummary {
    codInvoice : number;
    totalAmount : number;
    totalProducts : number;
    totalServices : number;
    totalDiscount : number;
    tailDiscount : String;
    totalTailDiscount : number;
    totalLineDiscount : number;
    totalVat : number;
    taxable : number;
}
