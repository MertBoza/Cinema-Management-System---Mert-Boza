import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../movies-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm:any = FormGroup;

  constructor(
    private movieService:MoviesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.addMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    if (this.addMovieForm.valid){
      console.log(this.addMovieForm.value);
      try{
        this.movieService.addMovies(this.addMovieForm.value);
        this.addMovieForm.reset();
        window.alert('Movie added. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      }catch(error: any){
        if (error.message === 'A movie with these details already exists'){
          window.alert('A movie with these details already exists. Please  check your input.');
        }else{
          console.error('Error adding movie:', error);
          window.alert('Failed to add movie. Please try again.');
        }
      }
    }else{
      window.alert('Form is not valid. Please check your input.');
    }
  }
}
