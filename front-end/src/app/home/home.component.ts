import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public movieId: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public findMovie() {
    if (this.movieId !== '') {
      this.router.navigate([`/movies/${this.movieId}`]);
    }
  }

}
