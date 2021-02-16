import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { selectClients } from 'src/app/redux/cliente';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  
  constructor(private store: Store, private clientsService: ClientsService, private router: Router) {
    console.log('costruttore items')
    this.clientsService.retrieveAllClients();
  }
  
  ngOnInit(): void {
    this.clientsService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  get clients(): Observable<Client[]> {
    return this.store.pipe(select(selectClients));
  }
  
  delete(client: Client) {
    console.log('delete')
    this.clientsService.deleteClient(client);
  }

  goToDetail(codClient: String) {
    this.router.navigateByUrl("/clients/detail/"+codClient)
  }

}
