import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vat } from 'src/app/core/model/vat';
import { VatsService } from '../services/vat.service';
import { Response } from 'src/app/core/model/response';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {

  response: Observable<Response>;
  error: String = "";
  
   vats: Vat[] = [];
  constructor(private vatService: VatsService) {
    console.log('costruttore vat')
    //console.log(this.urlPath)

    this.response = this.vatService.retreiveAllVats()

    console.log(this.response)

    this.response.subscribe(
      response => {
        this.vats = response.result;
        console.log(this.vats)
      },
      error => {
        this.error = error.error
        console.log(this.error)
      }
      
    )
   }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  delete(vat: Vat) {
    console.log('delete')
    console.log(vat)
    this.vatService.deleteVat(vat)
  }
}
