import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesPagePageRoutingModule } from './sales-page-routing.module';

import { SalesPagePage } from './sales-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesPagePageRoutingModule
  ],
  declarations: [SalesPagePage]
})
export class SalesPagePageModule {}
