import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoicesuppcustPageRoutingModule } from './choicesuppcust-routing.module';

import { ChoicesuppcustPage } from './choicesuppcust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoicesuppcustPageRoutingModule
  ],
  declarations: [ChoicesuppcustPage]
})
export class ChoicesuppcustPageModule {}
