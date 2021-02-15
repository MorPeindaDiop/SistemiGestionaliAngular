import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemsService: ItemsService, private router: Router) {
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

  save() {
    let item: Item = {
      ...this.itemForm.value
    }
    console.log(item)
    this.itemsService.createItem(item).subscribe(response => {return response});
    this.router.navigateByUrl('/items');
  }

}
