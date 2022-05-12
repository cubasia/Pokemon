import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowApiComponent } from '../show-api.component'

const routes: Routes = [
  { path: '', component: ShowApiComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ApiRoutingModule {}
