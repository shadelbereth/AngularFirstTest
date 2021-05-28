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
    return this.httpClient.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  lookupMovie(searchTitle:string) {
    return this.httpClient.get<Movie[]>(`${environment.apiUrl}/movies/search`, {params: {title: searchTitle}});
  }

  addMovie(onlineId:string | undefined) {
    return this.httpClient.post<Movie>(`${environment.apiUrl}/movies`, {apiId: onlineId});
  }

  deleteMovie(id : number | undefined) {
    return this.httpClient.delete(`${environment.apiUrl}/movies/${id}`);
  }
}
