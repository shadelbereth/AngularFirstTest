import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TVShow} from "../model/tvshow";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

  constructor(private httpClient : HttpClient) { }

  getTVShows() {
    return this.httpClient.get<TVShow[]>(`${environment.apiUrl}/tvshows`);
  }

  getTVShow(id: number) {
    return this.httpClient.get<TVShow>(`${environment.apiUrl}/tvshows/${id}`);
  }

  lookupTVShow(tvShow : TVShow) {
    return this.httpClient.get<TVShow[]>(`${environment.apiUrl}/tvshows/search`, {params : {title: tvShow.title}});
  }

  addTVShow(tvShow : TVShow) {
    return this.httpClient.post<TVShow>(`${environment.apiUrl}/tvshows/watchlist`, {apiId: tvShow.onlineId});
  }
}
