import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesRoutingModule } from './categories-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
