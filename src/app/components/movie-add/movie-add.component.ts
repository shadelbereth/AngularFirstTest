import { Component, OnInit } from '@angular/core';
import {Movie} from "../../model/Movie";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(movie : Movie) {
    console.log(movie);
  }
}
