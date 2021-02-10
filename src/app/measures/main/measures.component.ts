import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/model/response';
import { Measure } from 'src/app/core/model/measure';
import { MeasuresService } from '../services/measures.service';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.scss']
})
export class MeasuresComponent implements OnInit {

  response: Observable<Response>;
  error: String = "";
  
   measures: Measure[] = [];
  constructor(private measureService: MeasuresService) {
    console.log('costruttore measure')
    //console.log(this.urlPath)

    this.response = this.measureService.retreiveAllMeasures()

    console.log(this.response)

    this.response.subscribe(
      response => {
        this.measures = response.result;
        console.log(this.measures)
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

  delete(measure: Measure) {
    console.log('delete')
    console.log(measure)
    this.measureService.deleteMeasure(measure)
  }

}
