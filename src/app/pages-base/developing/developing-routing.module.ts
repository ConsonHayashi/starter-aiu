import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopingPage } from './developing.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopingPageRoutingModule {}
