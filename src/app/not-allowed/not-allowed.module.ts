import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotAllowedPageRoutingModule } from './not-allowed-routing.module';

import { NotAllowedPage } from './not-allowed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotAllowedPageRoutingModule
  ],
  declarations: [NotAllowedPage]
})
export class NotAllowedPageModule {}
