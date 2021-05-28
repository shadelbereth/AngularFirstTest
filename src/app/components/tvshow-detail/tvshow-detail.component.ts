import { Component, OnInit, OnDestroy } from '@angular/core';
import {TVShowService} from "../../service/tvshow.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TVShow} from "../../model/tvshow";

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.css']
})
export class TVShowDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  foundTVShow: TVShow | undefined;

  constructor(private tvShowService : TVShowService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.subscription = this.tvShowService.getTVShow(Number(id)).subscribe(tvShowResponse => this.foundTVShow = tvShowResponse);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
