import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAllowedPage } from './not-allowed.page';

const routes: Routes = [
  {
    path: '',
    component: NotAllowedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotAllowedPageRoutingModule {}
