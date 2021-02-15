export interface InvoiceSummary {
    cod_invoice : String;
    total_amount : number;
    total_products : number;
    total_services : number;
    total_discount : number;
    tail_discount : number;
    total_tile_discount : number;
    total_line_discount : number;
    total_vat : number;
    taxable : number
}
