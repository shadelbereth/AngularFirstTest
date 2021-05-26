import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movie: Movie[] = [];
  @Output() selected : EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
  }

  fetchMovie() {
  }

  deleteMovie(movie : Movie) {
    this.movieService.deleteMovie(movie.id).subscribe(() => this.fetchMovie());
  }

  showDetail($event: any) {
    this.selected.emit($event);
  }
}
