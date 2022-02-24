import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Addsupplier1Page } from './addsupplier1.page';

const routes: Routes = [
  {
    path: '',
    component: Addsupplier1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Addsupplier1PageRoutingModule {}
