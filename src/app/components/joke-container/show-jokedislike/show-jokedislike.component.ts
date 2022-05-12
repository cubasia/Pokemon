import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';

@Component({
  selector: 'app-show-jokedislike',
  templateUrl: './show-jokedislike.component.html',
  styleUrls: ['./show-jokedislike.component.css'],
})
export class ShowJokedislikeComponent implements OnInit {
  @Input() dislikeJoke!: JOKE;
  @Input() i!: number;
  @Output() delDislike = new EventEmitter<JOKE>();
  @Output() movDislike = new EventEmitter<JOKE>();
  constructor() {}

  ngOnInit(): void {}
  cancella(elemento: JOKE) {
    this.delDislike.emit(elemento);
  }
  muovi(elemento: JOKE) {
    this.movDislike.emit(elemento);
  }
}
