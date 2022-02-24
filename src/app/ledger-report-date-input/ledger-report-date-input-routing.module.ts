import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgerReportDateInputPage } from './ledger-report-date-input.page';

const routes: Routes = [
  {
    path: '',
    component: LedgerReportDateInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerReportDateInputPageRoutingModule {}
