import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {ActivatedRoute} from "@angular/router";
import {MovieAddComponent} from "../movie-add/movie-add.component";
import {AudioVisualProd} from "../../model/audio-visual-prod";

@Component({
  selector: 'app-audio-visual-prod-list',
  templateUrl: './audio-visual-prod-list.component.html',
  styleUrls: ['./audio-visual-prod-list.component.css']
})
export class AudioVisualProdListComponent implements OnInit {
  @Input() audioVisualProd: AudioVisualProd[] = [];
  @Output() selected : EventEmitter<AudioVisualProd> = new EventEmitter<AudioVisualProd>();
  @Output() delete : EventEmitter<any> = new EventEmitter<any>();
  hideDelete = false;

  constructor(public movieService:MovieService, private activatedRoute : ActivatedRoute) {
    this.hideDelete = activatedRoute.snapshot.component === MovieAddComponent;
  }

  ngOnInit(): void {
  }

  deleteAudioVisualProd(audioVisualProd : AudioVisualProd) {
    this.movieService.deleteMovie(audioVisualProd.id).subscribe(() => this.delete.emit());
  }

  showDetail($event: any) {
    this.selected.emit($event);
  }
}
