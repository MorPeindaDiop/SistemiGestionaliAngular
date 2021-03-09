import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from '../services/items.service';
import { selectItems } from 'src/app/redux/item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder, private itemsService: ItemsService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.itemForm = this.fb.group({
        codItem: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        measure: ['', Validators.required],
        type: ['', Validators.required],
        category: ['', Validators.required],
        discount: ['', Validators.required],
        vat: ['', Validators.required]
      }
    )
  }
        
  ngOnInit(): void {

    this.itemsService.retrieveAllItems();

    this.store.pipe(select(selectItems)).subscribe(items => {
      for (let item of items) {
        if (item.codItem === this.activatedRoute.snapshot.paramMap.get('codItem')) {
          this.itemForm.patchValue(
            item
          )
        }
      }
    })
  }

  save() {
    let item: Item = {
      ...this.itemForm.value
    }
    console.log(item)
    this.itemsService.createItem(item);
    this.router.navigateByUrl('/items');
  }

}
