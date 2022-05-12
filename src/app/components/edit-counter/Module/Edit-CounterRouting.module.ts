import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCounterComponent } from '../edit-counter.component';

const routes: Routes = [
  { path: '', component: EditCounterComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EditCounterRoutingModule {}
