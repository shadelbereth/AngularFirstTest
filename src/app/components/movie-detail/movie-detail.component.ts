import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  foundMovie: Movie | undefined;
  private subscription: Subscription | undefined;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.subscription = this.movieService.getMovie(Number(id)).subscribe(movieResponse => this.foundMovie = movieResponse);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
