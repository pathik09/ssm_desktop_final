import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgerreportPage } from './ledgerreport.page';

const routes: Routes = [
  {
    path: '',
    component: LedgerreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerreportPageRoutingModule {}
