import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Vat } from 'src/app/core/model/vat';
import { selectVat } from 'src/app/redux/vat';
import { VatsService } from '../services/vat.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  vatForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder, private vatsService: VatsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.vatForm = this.fb.group({
      codVat: ['', Validators.required],
      vat: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {

    this.vatsService.retrieveAllVat();

    this.store.pipe(select(selectVat)).subscribe(vats => {
      for (let vat of vats) {
        if (vat.codVat === this.activatedRoute.snapshot.paramMap.get('codVat')) {
          this.vatForm.patchValue(
            vat
          )
        }
      }
    })
  }

  save() {
    let vat: Vat = {
      ...this.vatForm.value
    }
    console.log(vat)
    this.vatsService.createVat(vat);
    this.router.navigateByUrl('/vat');
  }

}
