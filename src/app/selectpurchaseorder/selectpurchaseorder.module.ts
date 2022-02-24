import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectpurchaseorderPageRoutingModule } from './selectpurchaseorder-routing.module';

import { SelectpurchaseOrderPage } from './selectpurchaseorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectpurchaseorderPageRoutingModule
  ],
  declarations: [SelectpurchaseOrderPage]
})
export class SelectpurchaseorderPageModule {}
