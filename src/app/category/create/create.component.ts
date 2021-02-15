import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService, private router: Router) {
    this.categoryForm = this.fb.group({
      codCategory: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save() {
    let category: Category = {
      ...this.categoryForm.value
    }
    console.log(category)
    this.categoriesService.createCategory(category);
    this.router.navigateByUrl('/categories');
  }

}
