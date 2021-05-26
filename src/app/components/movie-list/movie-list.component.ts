import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieObs: Observable<Movie[]> | undefined;

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.fetchMovie()
  }

  fetchMovie() {
    this.movieObs = this.movieService.getMovies();
  }

  deleteMovie(movie : Movie) {
    this.movieService.deleteMovie(movie.id).subscribe(() => this.fetchMovie());
  }
}
