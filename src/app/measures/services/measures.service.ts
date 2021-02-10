import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Measure } from 'src/app/core/model/measure';
import { Response } from 'src/app/core/model/response';

@Injectable()
export class MeasuresService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllMeasures(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("measure/findAll")
  }

  createMeasure(measure: Measure): Observable<Response> {
    return this.http.retrievePostCall<Response>("measure/create", measure)
  }

  deleteMeasure(measure: Measure): Observable<Response> {
    return this.http.retrievePostCall<Response>("measure/delete", measure)
  }

}
