import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeContainerComponent } from '../joke-container.component';

const routes: Routes = [
  { path: '', component: JokeContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class JokeRoutingModule {}
