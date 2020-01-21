import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
public movies: Movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.findMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

}
