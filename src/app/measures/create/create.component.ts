import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Measure } from 'src/app/core/model/measure';
import { MeasuresService } from '../services/measures.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  measureForm: FormGroup;

  constructor(private fb: FormBuilder, private measuresService: MeasuresService, private router: Router) {
    this.measureForm = this.fb.group({
      codMeasure: ['', Validators.required],
      description: ['', Validators.required],
      symbol: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {
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
