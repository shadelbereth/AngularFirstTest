import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

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

  search(ngForm : NgForm) {
    if (ngForm.valid) {
      this.movieService.lookupMovie(ngForm.value.title).subscribe(movieResponse => this.movies = movieResponse);
    }
  }

  addNewMovie(movie : Movie) {
    this.movieService.addMovie(movie.onlineId).subscribe(movieResponse => this.router.navigate(["movie-detail", movieResponse.id]));
  }

  goToDetail(movie : Movie) {
    this.addNewMovie(movie);
  }
}
