import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';

@Injectable()
export class ItemsService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllItems(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("item/findAll")
}

}
