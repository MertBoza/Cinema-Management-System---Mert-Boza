import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categoryList:any = []
  deleteCategoryModal:boolean = false
  clickedCategoryData:any
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.fetchCategories()
  }

  fetchCategories(){
    this.categoryList = this.categoriesService.getCategories();
  }

  deleteCategoryFromTable(categoryId: number) {
    this.categoriesService.deleteCategory(categoryId);
    this.fetchCategories();
    window.alert('Category deleted, Click ok to see all Categories')
    this.deleteCategoryModal = false
  }

  deleteCategory(item:any){
    this.clickedCategoryData = item
    this.deleteCategoryModal = true
  }

  closeDeleteCategoryModal(){
    this.deleteCategoryModal = false
  }

}
