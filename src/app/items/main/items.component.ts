import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  urlPath: String = "item";

  constructor() {
    console.log('costruttore items')
    console.log(this.urlPath)
  }

  ngOnInit(): void {
  }

}
