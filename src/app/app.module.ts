import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { reducers } from './redux';
import { environment } from 'src/environments/environment';

import { ItemsEffects } from './redux/item/item.effects';

import { SharedModule } from './shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { VatEffects } from './redux/vat/vat.effects';
import { MeasuresEffects } from './redux/measure/measure.effects';
import { ClientsEffects } from './redux/cliente/client.effects';
import { CategoriesEffects } from './redux/category/category.effects';
import { InvoicesMasterEffects } from './redux/invoiceMaster/invoiceMaster.effects';
import { InvoicesDetailEffects } from './redux/invoiceDetail/invoiceDetail.effects';
import { InvoicesSummaryEffects } from './redux/invoiceSummary/invoiceSummary.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ItemsEffects,
      VatEffects,
      MeasuresEffects,
      ClientsEffects,
      CategoriesEffects,
      InvoicesMasterEffects,
      InvoicesDetailEffects,
      InvoicesSummaryEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    SharedModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
