import { Component, Input, OnInit } from '@angular/core';
import { POKE } from 'src/app/model/pokemon-interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
@Input() pokemon?:POKE

  constructor() { }

  ngOnInit(): void {
  }

}
