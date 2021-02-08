import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/model/response';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input('stringPath')
  urlPath: String;

  response: Observable<Response>;
  error: String = "";

  list= [];
  
  constructor(private listService: ListService) {

    console.log('costruttore list')
    console.log(this.urlPath)

    this.response = this.listService.findAll(this.urlPath)

    console.log(this.response)

    this.response.subscribe(
      result => {
        this.list = result.result
        console.log(this.list)
      },
      error => {
        this.error = error.error
        console.log(this.error)
      }
      
    )
  }

  ngOnInit(): void {
  }

}
