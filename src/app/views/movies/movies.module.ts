import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    AllMoviesComponent,
    EditMovieComponent,
    DetailsMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
