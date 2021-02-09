import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/model/item';
import { Response } from 'src/app/core/model/response';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  //urlPath: String = 'item';

  response: Observable<Response>;
  error: String = "";

  items: Item[] = [];
  
  constructor(private itemService: ItemsService) {
    console.log('costruttore items')

    this.response = this.itemService.retreiveAllItems()

    this.response.subscribe(
      response => {
        this.items = response.result;
        console.log(this.items)
      },
      error => {
        this.error = error.error
        console.log(this.error)
      }
    )

    sessionStorage.setItem("items",JSON.stringify(this.items));
  }

  ngOnInit(): void {
  }

  delete(item: Item) {
    console.log('delete')
    console.log(item)
    this.itemService.deleteItem(item)
  }

}
