import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCounterRoutingModule } from './Edit-CounterRouting.module'
import { EditCounterComponent } from '../edit-counter.component';

@NgModule({
  declarations: [EditCounterComponent],
  imports: [CommonModule, EditCounterRoutingModule],
})
export class EditCounterModule {}
