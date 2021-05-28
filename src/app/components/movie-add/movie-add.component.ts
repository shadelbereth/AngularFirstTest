import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../model/Movie";
import {MovieService} from "../../service/movie.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private subscription : Subscription | undefined;

  constructor(private movieService : MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  search(ngForm : NgForm) {
    if (ngForm.valid) {
      this.subscription = this.movieService.lookupMovie(ngForm.value.title).subscribe(movieResponse => this.movies = movieResponse);
    }
  }

  addNewMovie(movie : Movie) {
    this.movieService.addMovie(movie.onlineId).toPromise().then(movieResponse => this.router.navigate(["movie-detail", movieResponse.id]));
  }
}
