import {Component, OnDestroy, OnInit} from '@angular/core';
import {TVShow} from "../../model/tvshow";
import {AudioVisualProd} from "../../model/audio-visual-prod";
import {TVShowService} from "../../service/tvshow.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tvshow-home',
  templateUrl: './tvshow-home.component.html',
  styleUrls: ['./tvshow-home.component.css']
})
export class TVShowHomeComponent implements OnInit, OnDestroy {
  tvShows: TVShow[] = [];
  subscription : Subscription | undefined;

  constructor(private tvShowService : TVShowService, private router : Router) { }

  ngOnInit(): void {
    this.fetchTVShow();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  goToDetail(tvShow: AudioVisualProd) {
    this.router.navigate(["tv-show-detail", tvShow.id]);
  }

  fetchTVShow() {
    this.subscription = this.tvShowService.getTVShows().subscribe(tvShowResponse => this.tvShows = tvShowResponse);
  }

  deleteTVShow(tvShow: TVShow) {
    this.tvShowService.deleteTVShow(tvShow).toPromise().then(() => this.fetchTVShow());
  }
}
