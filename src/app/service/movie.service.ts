import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<Movie[]>(environment.apiUrl);
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${environment.apiUrl}/${id}`);
  }
}
