import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LedgerreportPageRoutingModule } from './ledgerreport-routing.module';

import { LedgerreportPage } from './ledgerreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LedgerreportPageRoutingModule
  ],
  declarations: [LedgerreportPage]
})
export class LedgerreportPageModule {}
