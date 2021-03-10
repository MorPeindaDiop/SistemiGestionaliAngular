import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/model/category';
import { Item } from 'src/app/core/model/item';
import { Measure } from 'src/app/core/model/measure';
import { Vat } from 'src/app/core/model/vat';
import { selectCategories } from 'src/app/redux/category';
import { selectMeasures } from 'src/app/redux/measure';
import { selectVat } from 'src/app/redux/vat';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemsService: ItemsService, private router: Router, private store: Store) {

    this.itemsService.retrieveAllCategories();
    this.itemsService.retrieveAllMeasures();
    this.itemsService.retrieveAllVat();

    this.itemForm = this.fb.group({
      codItem: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      measure: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      discount: ['', Validators.required],
      vat: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get categories(): Observable<Category[]> {
    return this.store.pipe(select(selectCategories));
  }

  get measures(): Observable<Measure[]> {
    return this.store.pipe(select(selectMeasures));
  }

  get vat(): Observable<Vat[]> {
    return this.store.pipe(select(selectVat));
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
