import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './main/items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
