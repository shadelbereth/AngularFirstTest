import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<Movie[]>("https://angularcoursebackend.azurewebsites.net/api/movies");
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>("https://angularcoursebackend.azurewebsites.net/api/movies/" + id);
  }
}
