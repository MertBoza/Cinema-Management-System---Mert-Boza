import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm:any = FormGroup;
  categoryDetails:any
  categoryId:any

  constructor(private route:ActivatedRoute,private categoriesService:CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId']
    });
    this.editCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.fetchCategoryDetails()
  }
  fetchCategoryDetails(){
    this.categoryDetails = this.categoriesService.getCategoryById(JSON.parse(this.categoryId));
    this.fillInputs()
  }

  fillInputs(){
    this.editCategoryForm.get('name').setValue(this.categoryDetails.name)
  }

  onSubmit(){
    if (this.editCategoryForm.valid) {
      try{
        let payload = {
          id:JSON.parse(this.categoryId),
          name:this.editCategoryForm.value.name
        }

        this.categoriesService.updateCategory(payload);
        this.editCategoryForm.reset();
        window.alert('Category name changed. Click OK to see all categories.');
        this.router.navigateByUrl('/categories/all-categories');
      }catch (error:any){
        console.error('Error changing category name ', error);
        window.alert('Failed to change category name. Please try again.');
      }
    }
  }
}

