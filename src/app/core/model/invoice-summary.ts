export interface InvoiceSummary {
    codInvoice : number;
    totalAmount : number;
    totalProducts : number;
    totalServices : number;
    totalDiscount : number;
    tailDiscount : number;
    totalTileDiscount : number;
    totalLineDiscount : number;
    totalVat : number;
    taxable : number;
}
