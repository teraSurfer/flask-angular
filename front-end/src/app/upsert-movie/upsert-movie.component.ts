import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upsert-movie',
  templateUrl: './upsert-movie.component.html',
  styleUrls: ['./upsert-movie.component.scss']
})
export class UpsertMovieComponent implements OnInit {

public movie: Movie;
public updateFlow: boolean;
public toast: any;
public showToast: boolean;
public today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar, private route: ActivatedRoute, private movieService: MoviesService, private router: Router) {
    this.toast = {};
  }

  ngOnInit() {
    if (this.router.url === '/update-movie' && this.route.snapshot.paramMap.has('id')) {
      // update logic
      this.updateFlow = true;
    } else {

      this.movie = {
        name: '',
        director: '',
        thumbnail: '',
        release_date: {},
      };
    }
  }

  public createMovie() {
    if (this.movie.name && this.movie.director) {
      const date = this.movie.release_date;
      this.movie.release_date = new Date(`${date.day}-${date.month}-${date.year}`).getTime();
      this.movie.release_date = Math.round(this.movie.release_date / 1000);
      this.movieService.createMovie(this.movie).subscribe((createdMovie: Movie) => {
        console.log(createdMovie);
        this.showToastNow('Movie created successfully.');
      });
    }
  }

  public showToastNow(msg) {
    this.toast.header = 'Success!';
    this.toast.msg = msg;
    this.showToast = true;
  }

}
