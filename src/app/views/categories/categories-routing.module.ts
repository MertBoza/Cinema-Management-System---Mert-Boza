import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { AllCategoriesComponent } from "./components/all-categories/all-categories.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";
import { EditCategoryComponent } from "./components/edit-category/edit-category.component";

const routes: Routes = [
    {
      path: 'categories', component: CategoriesComponent, children: [
      {path:'all-categories',component:AllCategoriesComponent},
      {path:'create-category',component:CreateCategoryComponent},
      {path:'edit-category/:id',component:EditCategoryComponent},
      ]
    }
  ];
  export const CategoriesRoutingModule = RouterModule.forChild(routes);