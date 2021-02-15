import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/core/model/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  itemForm: FormGroup;
  currentCodItem: String;
  
  constructor(private fb: FormBuilder, private itemsService: ItemsService, private router: Router) {

    this.currentCodItem = this.router.getCurrentNavigation().extractedUrl.toString().slice(14)

    console.log(this.currentCodItem)

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
