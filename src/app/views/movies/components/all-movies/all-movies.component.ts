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
  categories: string[] = [];
  selectedCategory: string | null = null;
  searchTerm: string = '';
  
  constructor(
    private moviesService:MoviesService, private categoriesService:CategoriesService
  ) { }

  ngOnInit(): void {
    this.fetchMovies()
    this.fetchCategories()
  }
  fetchCategories() {
    const categoriesObjects = this.categoriesService.getCategories();
    this.categories = categoriesObjects.map(category => category.name);
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
  filterMoviesByCategory() {
    if (this.selectedCategory) {
      this.movieList = this.moviesService.getMovies().filter(movie => movie.assignedCategory === this.selectedCategory);
    } else {
      this.fetchMovies();
    }
  }
  searchMovies() {
    // Filter movies based on search term
    if (this.searchTerm.trim() !== '') {
      this.movieList = this.moviesService.getMovies().filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        movie.assignedCategory.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.fetchMovies();
    }
  }

}
