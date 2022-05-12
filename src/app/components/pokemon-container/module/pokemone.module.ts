import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemonrouting.module'
import { PokemonContainerComponent } from '../pokemon-container.component'
import { MaterialModule } from 'src/app/module/components';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
@NgModule({
  declarations: [PokemonContainerComponent,PokemonDetailsComponent,PokemonListComponent],
  imports: [CommonModule, PokemonRoutingModule,MaterialModule],
})
export class PokemoneModule {}
