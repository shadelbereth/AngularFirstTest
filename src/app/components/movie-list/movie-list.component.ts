import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {ActivatedRoute} from "@angular/router";
import {MovieAddComponent} from "../movie-add/movie-add.component";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movie: Movie[] = [];
  @Output() selected : EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() delete : EventEmitter<any> = new EventEmitter<any>();
  hideDelete = false;

  constructor(public movieService:MovieService, private activatedRoute : ActivatedRoute) {
    this.hideDelete = activatedRoute.snapshot.component === MovieAddComponent;
  }

  ngOnInit(): void {
  }

  deleteMovie(movie : Movie) {
    this.movieService.deleteMovie(movie.id).subscribe(() => this.delete.emit());
  }

  showDetail($event: any) {
    this.selected.emit($event);
  }
}
