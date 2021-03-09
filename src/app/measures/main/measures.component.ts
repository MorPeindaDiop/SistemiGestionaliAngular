import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Measure } from 'src/app/core/model/measure';
import { MeasuresService } from '../services/measures.service';
import { select, Store } from '@ngrx/store';
import { selectMeasures } from 'src/app/redux/measure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.scss']
})
export class MeasuresComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private store: Store, private measureService: MeasuresService) {
    console.log('costruttore measure')
    this.measureService.retrieveAllMeasures();
  }

  ngOnInit(): void {
    this.measureService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    };
  }

  get measures(): Observable<Measure[]> {
    return this.store.pipe(select(selectMeasures));
  }

  delete(measure: Measure) {
    console.log('delete')
    this.measureService.deleteMeasure(measure)
  }

  goToDetail(codMeasure: String) {
    this.router.navigateByUrl("/measures/detail/" + codMeasure)
  }

}
