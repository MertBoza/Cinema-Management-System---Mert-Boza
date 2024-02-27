import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/views/categories/categories-service';
import { MoviesService } from '../../movies-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  editMovieForm:any = FormGroup;
  categoryList:any 
  movieId:any
  movieDetails:any
  constructor(private categoryService:CategoriesService,private moviesSservice:MoviesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieId'];
    });
    this.editMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      releasedate: new FormControl('', Validators.required),
      assignedCategory: new FormControl('', Validators.required),
    });
    this.categoryList = this.categoryService.getCategories();
    this.fetchMovieDetails()
  }

  fetchMovieDetails() {
    this.movieDetails =this.moviesSservice.getMovieById(JSON.parse(this.movieId)); 
    this.fillInputs()
  }

  fillInputs(){
    this.editMovieForm.get('title').setValue(this.movieDetails.title);
    this.editMovieForm.get('director').setValue(this.movieDetails.director);
    this.editMovieForm.get('releasedate').setValue(this.movieDetails.releasedate);
    this.editMovieForm.get('assignedCategory').setValue(this.movieDetails.assignedCategory);
    this.editMovieForm.get('description').setValue(this.movieDetails.description);
  }


  onSubmit() {
    if (this.editMovieForm.valid) {
      try {
        let payload = {
          id:JSON.parse(this.movieId),
          title:this.editMovieForm.value.title,
          director:this.editMovieForm.value.director,
          releasedate:this.editMovieForm.value.releasedate,
          assignedCategory:this.editMovieForm.value.assignedCategory,
          description:this.editMovieForm.value.description,
        }
        this.moviesSservice.updateMovie(payload);
        this.editMovieForm.reset();
        window.alert('Movie edited. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      } catch (error:any) {
        console.error('Error editing movie:', error);
        window.alert('Failed to edit movie. Please try again.');
        
      }
    } 
  }

}
