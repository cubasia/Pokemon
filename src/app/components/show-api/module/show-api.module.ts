import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module'
import { ShowApiComponent } from '../show-api.component'

import { MaterialModule } from 'src/app/module/components';

@NgModule({
  declarations: [ShowApiComponent],
  imports: [CommonModule, ApiRoutingModule, MaterialModule],
})
export class ApiModule {}
