import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectItems } from 'src/app/redux/item';
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

  response: Observable<Response>;
  error: String = "";

  deleteMessage: String = "";

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  
  constructor(private store: Store, private itemsService: ItemsService) {
    console.log('costruttore items')
    this.itemsService.retrieveAllItems();
  }
  
  ngOnInit(): void {
    console.log('on init items');
    this.itemsService;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
  }

  get items(): Observable<Item[]> {
    return this.store.pipe(select(selectItems));
  }
  
  delete(item: Item) {
    console.log('delete')
    this.itemsService.deleteItem(item);
  }

}
