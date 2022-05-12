import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCounterComponent } from '../show-counter.component';

const routes: Routes = [
  { path: '', component: ShowCounterComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ShowCounterRoutingModule {}
