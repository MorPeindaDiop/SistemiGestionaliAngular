import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasuresRoutingModule } from './measures-routing.module';
import { MeasuresComponent } from './main/measures.component';


@NgModule({
  declarations: [MeasuresComponent],
  imports: [
    CommonModule,
    MeasuresRoutingModule
  ]
})
export class MeasuresModule { }
