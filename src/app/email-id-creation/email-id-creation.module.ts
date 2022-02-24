import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailIdCreationPageRoutingModule } from './email-id-creation-routing.module';

import { EmailIdCreationPage } from './email-id-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailIdCreationPageRoutingModule
  ],
  declarations: [EmailIdCreationPage]
})
export class EmailIdCreationPageModule {}
