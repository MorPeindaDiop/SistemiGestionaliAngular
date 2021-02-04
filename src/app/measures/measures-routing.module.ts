import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasuresComponent } from './main/measures.component';

const routes: Routes = [{ path: '', component: MeasuresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasuresRoutingModule { }
