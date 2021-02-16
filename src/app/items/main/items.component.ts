import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectItems } from 'src/app/redux/item';
import { Observable, Subject } from 'rxjs';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  
  constructor(private store: Store, private itemsService: ItemsService) {
    console.log('costruttore items')
    this.itemsService.retrieveAllItems();
  }
  
  ngOnInit(): void {
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
