import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { categoriesReducer, CategoriesState } from "./category/category.reducers";
import { clientsReducer, ClientsState } from "./cliente/client.reducers";
import { invoicesDetailReducer, InvoicesDetailState } from "./invoiceDetail/invoiceDetail.reducers";
import { invoicesMasterReducer, InvoicesMasterState } from "./invoiceMaster/invoiceMaster.reducers";
import { invoicesSummaryReducer, InvoicesSummaryState } from "./invoiceSummary/invoiceSummary.reducers";
import { itemsReducer, ItemsState } from "./item/item.reducers";
import { measureReducer, MeasuresState } from "./measure/measure.reducers";
import { vatReducer, VatState } from "./vat/vat.reducers";

export interface AppState {
    [x: string]: any;
    router: RouterReducerState<any>;
    itemsState: ItemsState;
    vatState: VatState;
    measuresState: MeasuresState;
    clientsState: ClientsState;
    categoriesState: CategoriesState;
    invoicesMasterState: InvoicesMasterState;
    invoicesDetailState: InvoicesDetailState;
    invoicesSummaryState: InvoicesSummaryState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    itemsState: itemsReducer,
    vatState: vatReducer,
    measuresState: measureReducer,
    clientsState: clientsReducer,
    categoriesState: categoriesReducer,
    invoicesMasterState: invoicesMasterReducer,
    invoicesDetailState: invoicesDetailReducer,
    invoicesSummaryState: invoicesSummaryReducer
};