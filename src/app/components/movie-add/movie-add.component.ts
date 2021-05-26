import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService : MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  search(movie : Movie) {
    this.movieService.lookupMovie(movie.title).subscribe(movieResponse => this.movies = movieResponse);
  }

  addNewMovie(movie : Movie) {
    this.movieService.addMovie(movie.onlineId).subscribe(movieResponse => this.router.navigate(["movie-detail", movieResponse.id]));
  }
}
