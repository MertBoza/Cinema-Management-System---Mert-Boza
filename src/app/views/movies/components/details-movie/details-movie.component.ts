import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {
  movieDetails:any
  movieId:any
  constructor(private movieService:MoviesService, 
    private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params);
      
      this.movieId = params['movieId'];
    });
  }
  ngOnInit(): void {
    this.fetchMovieDetails()
    console.log(this.movieDetails);
    
  }
  fetchMovieDetails() {
    this.movieDetails = this.movieService.getMovieById(JSON.parse(this.movieId));   
  }
}
