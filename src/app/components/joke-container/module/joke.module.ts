import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module'
import { JokeContainerComponent } from '../joke-container.component';
import { ShowJokeComponent } from '../show-joke/show-joke.component'
import { ShowJokedislikeComponent } from '../show-jokedislike/show-jokedislike.component'

import { MaterialModule } from 'src/app/module/components';
@NgModule({
  declarations: [JokeContainerComponent,ShowJokedislikeComponent,ShowJokeComponent],
  imports: [CommonModule, JokeRoutingModule,
  MaterialModule],
})
export class JokeModule {}
