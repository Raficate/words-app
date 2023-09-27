import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountTeamPage } from './count-team.page';

const routes: Routes = [
  {
    path: '',
    component: CountTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountTeamPageRoutingModule {}
