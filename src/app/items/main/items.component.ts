import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/model/item';
import { selectItems } from 'src/app/redux/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  //urlPath: String = "item";

  constructor(private store: Store, private itemsService: ItemsService) {
    console.log('costruttore items')
    // console.log(this.urlPath)

    this.itemsService.retreiveAllItems();

  }

  get items(): Observable<any[]> {
    return this.store.pipe(select(selectItems));
  }

  ngOnInit(): void {
    console.log(this.items.subscribe(result=> console.log(result)))
  }

}
