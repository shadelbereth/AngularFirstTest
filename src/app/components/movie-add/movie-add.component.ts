import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.title);
  }
}
