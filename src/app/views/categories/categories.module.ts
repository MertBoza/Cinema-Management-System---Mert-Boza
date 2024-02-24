import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { DetailsCategoryComponent } from './components/details-category/details-category.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    AllCategoriesComponent,
    DetailsCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
