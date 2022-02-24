import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailIdCreationPage } from './email-id-creation.page';

const routes: Routes = [
  {
    path: '',
    component: EmailIdCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailIdCreationPageRoutingModule {}
