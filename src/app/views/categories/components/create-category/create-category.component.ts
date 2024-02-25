import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm:any = FormGroup;

  constructor(
    private categoryService:CategoriesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if (this.createCategoryForm.valid){
      console.log(this.createCategoryForm.value);
      try{
        this.categoryService.addCategories(this.createCategoryForm.value);
        this.createCategoryForm.reset();
        window.alert('Category created. Click OK to see all Categories.');
        this.router.navigateByUrl('/categories/add-categories');
      }catch(error: any){
        if (error.message === 'A category with these details already exists'){
          window.alert('A category with these details already exists. Please  check your input.');
        }else{
          console.error('Error creating category:', error);
          window.alert('Failed to create category. Please try again.');
        }
      }
    }else{
      window.alert('Form is not valid. Please check your input.');
    }
  }
}