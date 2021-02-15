import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Client } from 'src/app/core/model/client';
import { Response } from 'src/app/core/model/response';

@Injectable()
export class ClientsService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllClients(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("client/findAll")
  }

  createClient(client: Client): Observable<Response> {
    return this.http.retrievePostCall<Response>("client/create", client)
  }

  deleteClient(client: Client): Observable<Response> {
    return this.http.retrievePostCall<Response>("client/delete", client)
  }

}
