import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AudioVisualProd} from "../../model/audio-visual-prod";

@Component({
  selector: 'app-audio-visual-prod-add',
  templateUrl: './audio-visual-prod-add.component.html',
  styleUrls: ['./audio-visual-prod-add.component.css']
})
export class AudioVisualProdAddComponent implements OnInit {
  @Input() audioVisualProds: AudioVisualProd[] = [];
  @Output() search : EventEmitter<NgForm> = new EventEmitter<NgForm>();
  @Output() add : EventEmitter<AudioVisualProd> = new EventEmitter<AudioVisualProd>();

  constructor() { }

  ngOnInit(): void {
  }

  searchProd(ngForm: NgForm) {
    this.search.emit(ngForm);
  }

  goToDetail(prod: AudioVisualProd) {
    this.add.emit(prod);
  }
}
