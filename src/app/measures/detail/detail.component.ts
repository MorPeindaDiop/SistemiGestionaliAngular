import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Measure } from 'src/app/core/model/measure';
import { selectMeasures } from 'src/app/redux/measure';
import { MeasuresService } from '../services/measures.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  measureForm: FormGroup;

  measure: Measure;

  constructor(private store: Store, private fb: FormBuilder, private measuresService: MeasuresService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.measureForm = this.fb.group({
      codMeasure: ['', Validators.required],
      description: ['', Validators.required],
      symbol: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.store.pipe(select(selectMeasures)).subscribe(measures => {
      for (let measure of measures) {
        if (measure.codMeasure === this.activatedRoute.snapshot.paramMap.get('codMeasure')) {
          this.measure = measure
        }
      }
    })

    this.measureForm.patchValue(
      this.measure
    )
  }

  save() {
    let measure: Measure = {
      ...this.measureForm.value
    }
    console.log(measure)
    this.measuresService.createMeasure(measure);
    this.router.navigateByUrl('/measures');
  }

}
