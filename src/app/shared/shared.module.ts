import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { IgxTabsModule } from "igniteui-angular";


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
    IgxTabsModule
  ],
  exports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    DateTimePickerModule,
    IgxTabsModule
  ]
})
export class SharedModule { }
