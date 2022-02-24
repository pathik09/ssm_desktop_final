import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Addsupplier1PageRoutingModule } from './addsupplier1-routing.module';

import { Addsupplier1Page } from './addsupplier1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Addsupplier1PageRoutingModule
  ],
  declarations: [Addsupplier1Page]
})
export class Addsupplier1PageModule {}
