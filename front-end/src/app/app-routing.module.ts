import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { UpsertMovieComponent } from './upsert-movie/upsert-movie.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'create-movie',
    component: UpsertMovieComponent
  },
  {
    path: 'update-movie/:id',
    component: UpsertMovieComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
