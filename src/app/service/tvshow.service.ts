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
}
