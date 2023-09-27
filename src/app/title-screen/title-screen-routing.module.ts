import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleScreenPage } from './title-screen.page';

const routes: Routes = [
  {
    path: '',
    component: TitleScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleScreenPageRoutingModule {}
