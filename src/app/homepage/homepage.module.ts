import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageRoutingModule } from './homepage-routing.module';
import { Specialmovie1Component } from './specialmovie1/specialmovie1.component';
import { Specialmovie2Component } from './specialmovie2/specialmovie2.component';
import { Specialmovie3Component } from './specialmovie3/specialmovie3.component';



@NgModule({
  declarations: [
    HomepageComponent,
    Specialmovie1Component,
    Specialmovie2Component,
    Specialmovie3Component,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HomepageModule { }
