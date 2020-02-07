import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie$: Movie;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.findMovieById(+this.route.snapshot.paramMap.get('id'))
      .subscribe((movie: Movie) => {
        this.movie$ = movie;
      });
  }

  public deleteMovie() {
    if (this.movie$.id)  {
      this.movieService.deleteMovie(this.movie$.id)
          .subscribe((message: any) => {
            this.router.navigate(['movies']);
        });
    }
  }
}
