import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { POKE } from 'src/app/model/pokemon-interface';
import { HttpclientService } from '../../services/HttpClient/HttpClientServices'

const URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKENUMBER = 898
const MaxPokeNumber=6
@Injectable()
export class PokemonServiceService {
  constructor(private Httpclient: HttpclientService) { }

  private pokemonCatturatiArray: POKE[]=[]
  private pokemonRifiutatiArray: POKE[]=[]

  get Pokemon(): Observable<POKE> {
    let numero = Math.trunc(POKENUMBER * Math.random())
   let  newUrl = URL + numero.toString();
  //console.log(numero)
    return this.Httpclient.getWithUrl<POKE>(newUrl).pipe(
      catchError(error => {
           return this.Pokemon
      })
    )
  }


  get pokemonCatturati():POKE[] {
    return this.pokemonCatturatiArray
  }
  get pokemonRifiutati():POKE[] {
    return this.pokemonRifiutatiArray
  }
  cattura(pokemon: POKE) {

    if (
      this.pokemonCatturatiArray.length < MaxPokeNumber &&
      !this.pokemonCatturatiArray.includes(pokemon)
    )
      this.pokemonCatturatiArray = [...this.pokemonCatturatiArray, pokemon];
  }
  rifiuta(pokemon: POKE) {
    if(!this.pokemonRifiutatiArray.includes(pokemon))
    this.pokemonRifiutatiArray = [...this.pokemonRifiutatiArray, pokemon];
  }
  cancellaCatturati(pokemon: POKE) {
    this.pokemonCatturatiArray = this.pokemonCatturatiArray.filter(elemento => elemento.id!== pokemon.id);
  }
  cancellaRifiutati(pokemon: POKE) {
    this.pokemonRifiutatiArray = this.pokemonRifiutatiArray.filter(elemento => elemento.id!== pokemon.id);
  }

}
