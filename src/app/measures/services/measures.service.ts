import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Measure } from 'src/app/core/model/measure';
import { createMeasure, deleteMeasure, retrieveAllMeasures } from 'src/app/redux/measure/measure.actions';

@Injectable()
export class MeasuresService {

  constructor(private store: Store) { }

  retrieveAllMeasures() {
    return this.store.dispatch(retrieveAllMeasures())
  }

  createMeasure(measure: Measure) {
    return this.store.dispatch(createMeasure({ measure }))
  }

  deleteMeasure(measure: Measure) {
    return this.store.dispatch(deleteMeasure({ measure }))
  }

}
