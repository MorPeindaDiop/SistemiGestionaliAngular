import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Response } from 'src/app/core/model/response';

@Injectable()
export class ListService {

  constructor(private http: HttpCommunicationsService) { }

  findAll(path: String): Observable<Response> {
    return this.http.retrieveGetCall<Response>(path + "/findAll")
  }

}
