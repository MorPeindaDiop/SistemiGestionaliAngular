import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Category } from 'src/app/core/model/category';
import { Response } from 'src/app/core/model/response';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpCommunicationsService) { }

  retreiveAllCategories(): Observable<Response> {
    return this.http.retrieveGetCall<Response>("category/findAll")
  }

  createCategory(category: Category): Observable<Response> {
    return this.http.retrievePostCall<Response>("category/create", category)
  }

  deleteCategory(category: Category): Observable<Response> {
    return this.http.retrievePostCall<Response>("category/delete", category)
  }

}
