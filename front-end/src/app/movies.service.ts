import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5000';
  }

  public makeApiCall(): Observable<Message> {
    return this.http.get(this.baseUrl);
  }

  public findMovieById(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}/movies/${id}`);
  }

  public findMovies(limit = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies?limit=${limit}`);
  }
}
