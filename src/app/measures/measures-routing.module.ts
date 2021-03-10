import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { MeasuresComponent } from './main/measures.component';

const routes: Routes = [
  { path: '', component: MeasuresComponent },
  { path: 'detail/:codMeasure', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasuresRoutingModule { }
