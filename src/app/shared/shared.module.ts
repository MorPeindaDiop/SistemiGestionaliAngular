import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { IgxTabsModule, IgxNavbarModule, IgxIconModule } from "igniteui-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    DateTimePickerModule,
    IgxTabsModule,
    IgxNavbarModule,
	  IgxIconModule,
    NgbModule
  ],
  exports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    DateTimePickerModule,
    IgxTabsModule,
    IgxNavbarModule,
	  IgxIconModule,
    NgbModule
  ]
})
export class SharedModule { }
