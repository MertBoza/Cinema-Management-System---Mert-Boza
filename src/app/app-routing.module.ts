import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
