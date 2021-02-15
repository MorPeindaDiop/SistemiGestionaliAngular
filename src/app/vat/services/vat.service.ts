import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Measure } from 'src/app/core/model/measure';
import { Response } from 'src/app/core/model/response';
import { Vat } from 'src/app/core/model/vat';

@Injectable()
export class VatsService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllVats(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("vat/findAll")
  }

  createVat(vat: Vat): Observable<Response> {
    return this.http.retrievePostCall<Response>("vat/create", vat)
  }

  deleteVat(vat: Vat): Observable<Response> {
    return this.http.retrievePostCall<Response>("vat/delete", vat)
  }

}
