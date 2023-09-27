import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountTeamPageRoutingModule } from './count-team-routing.module';

import { CountTeamPage } from './count-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountTeamPageRoutingModule
  ],
  declarations: [CountTeamPage]
})
export class CountTeamPageModule {}
