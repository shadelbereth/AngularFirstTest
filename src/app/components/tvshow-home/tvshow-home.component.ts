import { Component, OnInit } from '@angular/core';
import {TVShow} from "../../model/tvshow";
import {AudioVisualProd} from "../../model/audio-visual-prod";
import {TVShowService} from "../../service/tvshow.service";

@Component({
  selector: 'app-tvshow-home',
  templateUrl: './tvshow-home.component.html',
  styleUrls: ['./tvshow-home.component.css']
})
export class TVShowHomeComponent implements OnInit {
  tvShows: TVShow[] = [];

  constructor(private tvShowService : TVShowService) { }

  ngOnInit(): void {
    this.fetchTVShow();
  }

  goToDetail(tvShow: AudioVisualProd) {

  }

  fetchTVShow() {
    this.tvShowService.getTVShows().subscribe(tvShowResponse => this.tvShows = tvShowResponse);
  }
}
