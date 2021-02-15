import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/model/client';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clientsService: ClientsService, private router: Router) {
    this.clienteForm = this.fb.group({
      codClient: ['', Validators.required],
      business_name: ['', Validators.required],
      piva: ['', Validators.required],
      fiscal_cod: ['', Validators.required],
      mail: ['', Validators.required],
      tel: ['', Validators.required],
      cel: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      province: ['', Validators.required],
      cap: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save() {
    let cliente: Client = {
      ...this.clienteForm.value
    }
    console.log(cliente)
    this.clientsService.createClient(cliente);
    this.router.navigateByUrl('/clients');
  }

}
