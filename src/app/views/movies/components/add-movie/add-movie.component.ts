import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../movies-service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovieForm:any = FormGroup
  categoryList:any = [];
  constructor(private moviesService:MoviesService,private router:Router,private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.addMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      releasedate: new FormControl('', Validators.required),
      assignedCategory: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    
    this.categoryList = this.categoriesService.getCategories();
  }


  onSubmit() {
    
    if (this.addMovieForm.valid) {
      try {
        this.moviesService.addMovies(this.addMovieForm.value);
        this.addMovieForm.reset();
        window.alert('Movie added. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      } catch (error:any) {
          console.log(error);
          window.alert('Failed to add movie. Please try again.');
      
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }
  
}
