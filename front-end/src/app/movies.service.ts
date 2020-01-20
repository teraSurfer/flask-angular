import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable()
export class MoviesService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5000/';
  }

  public makeApiCall(): Observable<Message> {
    return this.http.get(this.baseUrl);
  }
}
