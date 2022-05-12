import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POKE, Pokemostrato, Tipo_Pokemon } from 'src/app/model/pokemon-interface';
import {PokemonServiceService}from '../../services/pokemon/pokemon-service.service';
@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css'],
  providers: [PokemonServiceService],
})
export class PokemonContainerComponent implements OnInit {
  constructor(private pokemonService: PokemonServiceService) {}
  pokemon!: Observable<POKE>;
  singlepokemon?: POKE;
  currentpokemon?: POKE;
 pokeBackgroundClass=Tipo_Pokemon.default
  showMe(poke: Pokemostrato) {
    this.singlepokemon = poke.pokemon;
    this.cambiaSfondo(poke.tipo)
  }
  cambiaSfondo(tipo: Tipo_Pokemon):void {
    switch (tipo) {
      case Tipo_Pokemon.default:
        this.pokeBackgroundClass = Tipo_Pokemon.default
        break;
      case Tipo_Pokemon.catturato:
        this.pokeBackgroundClass = Tipo_Pokemon.catturato
        break;
      case Tipo_Pokemon.rifiutato:
        this.pokeBackgroundClass = Tipo_Pokemon.rifiutato
        break;
      default:
        break;
    }
   }

  get pokemonCatturati(): POKE[] {
    return this.pokemonService.pokemonCatturati;
  }
  get pokemonRifiutati(): POKE[] {
    return this.pokemonService.pokemonRifiutati;
  }
  ngOnInit(): void {
    this.pokemon = this.pokemonService.Pokemon;
  }
  cancellaRif(poke: POKE[]): void {
    this.pokemonService.cancellaRifiutati(poke[0]);
    let pokedamostrare: Pokemostrato = { pokemon: poke[1], tipo: Tipo_Pokemon.default };
    this.showMe(pokedamostrare)
    ;
  }
  cancellaCat(poke: POKE[]): void {
    this.pokemonService.cancellaCatturati(poke[0]);
     let pokedamostrare: Pokemostrato = {
      pokemon: poke[1],
      tipo: Tipo_Pokemon.default,
    };
    this.showMe(pokedamostrare);
  }

  cattura(poke: POKE) {
    this.pokemonService.cattura(poke);
    this.ngOnInit();
  }
  rifiuta(poke: POKE) {
    this.pokemonService.rifiuta(poke);
    this.ngOnInit();
  }
}
