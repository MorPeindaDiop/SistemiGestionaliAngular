import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Category } from 'src/app/core/model/category';
import { selectCategories } from 'src/app/redux/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  categoryForm: FormGroup;

  category: Category;

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private categoriesService: CategoriesService, private router: Router) {
    this.categoryForm = this.fb.group({
      codCategory: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.store.pipe(select(selectCategories)).subscribe(categories => {
      for (let category of categories) {
        if (category.codCategory === this.activatedRoute.snapshot.paramMap.get('codCategory')) {
          this.category = category
          console.log(this.category)
        }
      }
    })

    this.categoryForm.patchValue(
      this.category
    )
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
