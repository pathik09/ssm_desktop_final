import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoReportPageRoutingModule } from './po-report-routing.module';

import { PoReportPage } from './po-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoReportPageRoutingModule
  ],
  declarations: [PoReportPage]
})
export class PoReportPageModule {}
