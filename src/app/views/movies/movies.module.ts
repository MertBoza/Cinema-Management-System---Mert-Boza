import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';



@NgModule({
  declarations: [
    MoviesComponent,
    AddMovieComponent,
    AllMoviesComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
