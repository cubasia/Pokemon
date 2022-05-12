import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './Shop-Routing.module'
import { ShopComponent } from '../shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/module/components';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShopRoutingModule, FormsModule, ReactiveFormsModule,
  MaterialModule],
})
export class ShopCounterModule {}
