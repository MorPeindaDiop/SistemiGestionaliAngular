import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasuresRoutingModule } from './measures-routing.module';
import { MeasuresComponent } from './main/measures.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MeasuresComponent],
  imports: [
    CommonModule,
    MeasuresRoutingModule,
    SharedModule
  ]
})
export class MeasuresModule { }
