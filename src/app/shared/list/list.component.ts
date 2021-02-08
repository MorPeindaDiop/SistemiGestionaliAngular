import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/model/response';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input('list')
  list: Observable<any[]>;

  //response: Observable<Response>;
  error: String = "";

  //list= [];
  
  constructor(private listService: ListService) {

    console.log(this.list)

    //this.response = this.listService.findAll(this.stringPath)

    //console.log(this.response)

    // this.list.subscribe(
    //   result => {
    //     this.list = result.result
    //     console.log(this.list)
    //   },
    //   error => {
    //     this.error = error.error
    //     console.log(this.error)
    //   }
    // )
  }

  ngOnInit(): void {
  }

}
