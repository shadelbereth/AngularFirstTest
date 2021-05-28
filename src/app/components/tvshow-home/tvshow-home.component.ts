import { Component, OnInit } from '@angular/core';
import {TVShow} from "../../model/tvshow";
import {AudioVisualProd} from "../../model/audio-visual-prod";
import {TVShowService} from "../../service/tvshow.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tvshow-home',
  templateUrl: './tvshow-home.component.html',
  styleUrls: ['./tvshow-home.component.css']
})
export class TVShowHomeComponent implements OnInit {
  tvShows: TVShow[] = [];

  constructor(private tvShowService : TVShowService, private router : Router) { }

  ngOnInit(): void {
    this.fetchTVShow();
  }

  goToDetail(tvShow: AudioVisualProd) {
    this.router.navigate(["tv-show-detail", tvShow.id]);
  }

  fetchTVShow() {
    this.tvShowService.getTVShows().subscribe(tvShowResponse => this.tvShows = tvShowResponse);
  }
}
