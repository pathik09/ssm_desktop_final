import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LedgerReportDateInputPageRoutingModule } from './ledger-report-date-input-routing.module';

import { LedgerReportDateInputPage } from './ledger-report-date-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LedgerReportDateInputPageRoutingModule
  ],
  declarations: [LedgerReportDateInputPage]
})
export class LedgerReportDateInputPageModule {}
