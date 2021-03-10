import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './main/items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsService } from './services/items.service';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ItemsComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule { }
