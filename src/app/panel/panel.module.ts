import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './main/panel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
  ]
})
export class PanelModule { }
