import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpCommunicationsService } from './HttpCommunications/http-communications.service';



@NgModule({
  declarations: [],
  providers: [
    HttpCommunicationsService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
