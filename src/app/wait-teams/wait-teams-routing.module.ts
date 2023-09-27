import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitTeamsPage } from './wait-teams.page';

const routes: Routes = [
  {
    path: '',
    component: WaitTeamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitTeamsPageRoutingModule {}
