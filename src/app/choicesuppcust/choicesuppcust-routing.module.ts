import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoicesuppcustPage } from './choicesuppcust.page';

const routes: Routes = [
  {
    path: '',
    component: ChoicesuppcustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoicesuppcustPageRoutingModule {}
