import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { AllMoviesComponent } from "./components/all-movies/all-movies.component";
import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { DetailsMovieComponent } from "./components/details-movie/details-movie.component";
import { EditMovieComponent } from "./components/edit-movie/edit-movie.component";

const routes: Routes = [
    {
      path: 'movies', component: MoviesComponent, children: [
      {path:'all-movies',component:AllMoviesComponent},
      {path:'add-movies',component:AddMovieComponent},
      {path:'edit-movie/:id',component:EditMovieComponent},
      {path:'details-movie/:id',component:DetailsMovieComponent}
      ]
    }
  ];
  export const MoviesRoutingModule = RouterModule.forChild(routes);
  