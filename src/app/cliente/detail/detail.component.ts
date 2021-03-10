import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Client } from 'src/app/core/model/client';
import { selectClients } from 'src/app/redux/cliente';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder, private clientsService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) {
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

    this.clientsService.retrieveAllClients();

    this.store.pipe(select(selectClients)).subscribe(clients => {
      for (let client of clients) {
        if (client.codClient === this.activatedRoute.snapshot.paramMap.get('codClient')) {
          this.clienteForm.patchValue(
            client
          )
        }
      }
    })
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
