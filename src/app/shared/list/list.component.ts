import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/model/response';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  path: String;

  response: Observable<Response>;
  
  constructor(private listService: ListService) {
    this.response = this.listService.findAll(this.path)

    console.log(this.response)
  }

  ngOnInit(): void {
  }

}
