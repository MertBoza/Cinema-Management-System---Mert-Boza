import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../views/categories/categories-service';
import { MoviesService } from '../views/movies/movies-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movieList: any = []
  clickedMovieData:any
  constructor( 
    private categoryService:CategoriesService,
    private movieService:MoviesService
  ) { }

  ngOnInit(): void {
    this.fetchMovies
  }

  fetchMovies() {
    this.movieList = this.movieService.getMovies();
  }

}
