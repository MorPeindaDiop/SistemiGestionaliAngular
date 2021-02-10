import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/model/client';
import { Response } from 'src/app/core/model/response';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  response: Observable<Response>;
  error: String = "";
  public dataa = [
    {name: 'Ajay', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ];
   clients: Client[] = [];
  constructor(private clientService: ClientsService) {
    console.log('costruttore clients')
    //console.log(this.urlPath)

    this.response = this.clientService.retreiveAllClients()

    console.log(this.response)

    this.response.subscribe(
      response => {
        this.clients = response.result;
        console.log(this.clients)
      },
      error => {
        this.error = error.error
        console.log(this.error)
      }
      
    )
   }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  delete(client: Client) {
    console.log('delete')
    console.log(client)
    this.clientService.deleteClient(client)
  }

}
