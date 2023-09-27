import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitTeamsPageRoutingModule } from './wait-teams-routing.module';

import { WaitTeamsPage } from './wait-teams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitTeamsPageRoutingModule
  ],
  declarations: [WaitTeamsPage]
})
export class WaitTeamsPageModule {}
