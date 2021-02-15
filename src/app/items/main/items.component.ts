import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Item } from 'src/app/core/model/item';
import { Response } from 'src/app/core/model/response';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  subscriptions: Subscription;

  response: Observable<Response>;
  error: String = "";

  deleteMessage: String = "";

  items: Item[] = [];

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  
  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    console.log('on init items')
    this.itemService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

    this.response = this.itemService.retreiveAllItems()

    this.allItems();
  }
  
  allItems() {
    console.log('all items')
    this.subscriptions.add(
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
    )
  }

  delete(item: Item) {
    console.log('delete')
    console.log(item)
    this.subscriptions.add(
      this.itemService.deleteItem(item).subscribe((response) => this.deleteMessage = response.result)
    )
    this.removeItem(item)
  }
  
  removeItem(item: Item) {
    console.log("remove item")
    console.log(item)
    if (this.deleteMessage = "Item eliminato.") {
      this.items.filter(itemInArray => itemInArray != item)
    };
    console.log(this.items)
    //this.allItems();
    this.ngOnInit();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  

}
