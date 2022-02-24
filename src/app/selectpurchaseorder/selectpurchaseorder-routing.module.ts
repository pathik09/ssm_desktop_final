import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectpurchaseOrderPage } from './selectpurchaseorder.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpurchaseOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectpurchaseorderPageRoutingModule {}
