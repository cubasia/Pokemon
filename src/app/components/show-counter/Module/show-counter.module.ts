import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCounterRoutingModule } from './Show-CounterRouting.module'
import { ShowCounterComponent } from '../show-counter.component';
@NgModule({
  declarations: [ShowCounterComponent],
  imports: [CommonModule, ShowCounterRoutingModule],
})
export class ShowCounterModule {}
