import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Item } from 'src/app/core/model/item';
import { Response } from 'src/app/core/model/response';

@Injectable()
export class ItemsService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllItems(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("item/findAll")
  }

  createItem(item: Item): Observable<Response> {
    return this.http.retrievePostCall<Response>("item/create", item)
  }

  deleteItem(item: Item): Observable<Response> {
    return this.http.retrievePostCall<Response>("item/delete", item)
  }

}
