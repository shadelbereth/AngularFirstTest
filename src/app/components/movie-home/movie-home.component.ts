import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit, OnDestroy {
  movieList : Movie[] = [];
  private subscription : Subscription | undefined;

  constructor(private movieService : MovieService, private router : Router) { }

  ngOnInit(): void {
    this.fetchMovie();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public fetchMovie() {
    this.subscription = this.movieService.getMovies().subscribe(movieResponse => this.movieList = movieResponse);
  }

  goToDetail(movie: Movie) {
    this.router.navigate(["movie-detail", movie.id])
  }

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.id).toPromise().then(() => this.fetchMovie())
  }
}
