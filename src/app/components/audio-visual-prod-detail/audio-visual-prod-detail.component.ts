import {Component, Input, OnInit} from '@angular/core';
import {AudioVisualProd} from "../../model/audio-visual-prod";
import {Movie} from "../../model/Movie";
import {TVShow} from "../../model/tvshow";

@Component({
  selector: 'app-audio-visual-prod-detail',
  templateUrl: './audio-visual-prod-detail.component.html',
  styleUrls: ['./audio-visual-prod-detail.component.css']
})
export class AudioVisualProdDetailComponent implements OnInit {
  @Input() foundProd: AudioVisualProd | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  convertToMovie(prod : AudioVisualProd | undefined) {
    return prod as Movie;
  }

  isMovie(prod : AudioVisualProd | undefined) {
    return (prod as Movie)?.plot !== undefined;
  }

  convertToTVShow(prod : AudioVisualProd | undefined) {
    return prod as TVShow;
  }

  isTVShow(prod : AudioVisualProd | undefined) {
    return (prod as TVShow)?.overview !== undefined;
  }
}
