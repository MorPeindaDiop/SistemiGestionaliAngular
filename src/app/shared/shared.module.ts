import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListService } from './services/list.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ListService
  ],
  exports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    ListComponent
  ]
})
export class SharedModule { }
