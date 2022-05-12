import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainerComponent } from '../pokemon-container.component'

const routes: Routes = [
  { path: '', component: PokemonContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PokemonRoutingModule {}
