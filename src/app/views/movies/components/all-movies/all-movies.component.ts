import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies-service';
import { CategoriesService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movieList:any = []
  deleteMovieModal:boolean = false
  clickedMovieData:any
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies()
  }

  
  fetchMovies() {
    this.movieList = this.moviesService.getMovies();
  }
 

  deleteMovie(item:any){
    this.clickedMovieData = item
    this.deleteMovieModal = true
  }

  deleteMovieFromTable(movieId: number) {
    this.moviesService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('Movie deleted, Click ok to see all movies')
    this.deleteMovieModal = false
  }

  closeDeleteMovieModal(){
    this.deleteMovieModal = false
  }


}
