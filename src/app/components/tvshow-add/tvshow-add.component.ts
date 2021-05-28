import {Component, OnDestroy, OnInit} from '@angular/core';
import {TVShow} from "../../model/tvshow";
import {NgForm} from "@angular/forms";
import {TVShowService} from "../../service/tvshow.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tvshow-add',
  templateUrl: './tvshow-add.component.html',
  styleUrls: ['./tvshow-add.component.css']
})
export class TVShowAddComponent implements OnInit, OnDestroy {
  tvShows: TVShow[] = [];
  private subscription : Subscription | undefined;

  constructor(private tvShowService : TVShowService, private router : Router) { }

  ngOnInit(): void {
  }

  searchTVShows(ngForm: NgForm) {
    if (ngForm.valid) {
      this.subscription = this.tvShowService.lookupTVShow(ngForm.value).subscribe(response =>this.tvShows = response);
    }
  }

  addTVShow(tvShow : TVShow) {
    this.tvShowService.addTVShow(tvShow).toPromise().then(response => this.router.navigate(["/tv-show-detail/", response.id]));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
