import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/model/client';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clientsService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.clienteForm = this.fb.group({
      codClient: ['', Validators.required],
      businessName: ['', Validators.required],
      piva: ['', Validators.required],
      fiscalCod: ['', Validators.required],
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
    console.log(this.router.url)
    if (this.router.url == "/clients/create") {
      this.router.navigateByUrl('/clients');
    } else {
      this.ngOnDestroy()
    }
  }

  ngOnDestroy(): void {
   // throw new Error('Method not implemented.');

   //this.router.
  }

}
