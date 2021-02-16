import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vat } from 'src/app/core/model/vat';
import { VatsService } from '../services/vat.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  vatForm: FormGroup;

  constructor(private fb: FormBuilder, private vatsService: VatsService, private router: Router) {
    this.vatForm = this.fb.group({
      codVat: ['', Validators.required],
      vat: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {
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
