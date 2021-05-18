import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private subscription: Subscription | undefined;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().subscribe(movieResponse => this.movies = movieResponse);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
