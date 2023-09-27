import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsViewPage } from './teams-view.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsViewPageRoutingModule {}
