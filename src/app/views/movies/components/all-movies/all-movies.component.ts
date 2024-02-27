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
  categoryList: any[] = [];
  deleteMovieModal:boolean = false
  clickedMovieData:any
  constructor(
    private movieService:MoviesService,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.fetchCategories()
    this.fetchMovies()
  }

  fetchCategories() {
    this.categoryList = this.categoryService.getCategories();
    console.log('Category List:', this.categoryList);
  }

  fetchMovies() {
    this.movieList = this.movieService.getMovies()
  }

  deleteMovieFromTable(movieId: number) {
    this.movieService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('Movie deleted, Click ok to see all movies')
    this.deleteMovieModal = false
  }
  
 

  deleteMovie(item:any){
    this.clickedMovieData = item
    this.deleteMovieModal = true
  }

  closeDeleteMovieModal(){
    this.deleteMovieModal = false
  }

  getCategoryName(categoryId: number): string {
    const category = this.categoryList.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}