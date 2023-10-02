import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsViewAltPage } from './teams-view-alt.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsViewAltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsViewAltPageRoutingModule {}
