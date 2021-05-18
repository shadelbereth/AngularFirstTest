import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Movie} from "../../model/Movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  foundMovie: Movie | undefined;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.foundMovie = this.movieService.getMovie(Number(id));
  }

}
