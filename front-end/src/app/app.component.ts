import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = '';
  constructor(private moviesService: MoviesService) {}
  callHelloApi() {
    console.log('clicked');
    this.moviesService.makeApiCall().subscribe((data: Message) => {
      this.message = data.message;
    });
  }
}
