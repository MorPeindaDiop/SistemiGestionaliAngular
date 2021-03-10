import { StringDecoder } from "string_decoder";

export interface Item {
    codItem : String;
    description : String;
    price : number;
    measure : String;
    type : String;
    category : String;
    discount : number;
    vat : String;
}