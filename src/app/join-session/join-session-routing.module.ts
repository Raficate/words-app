import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinSessionPage } from './join-session.page';

const routes: Routes = [
  {
    path: '',
    component: JoinSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinSessionPageRoutingModule {}
