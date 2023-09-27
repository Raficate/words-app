import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessTeamPageRoutingModule } from './guess-team-routing.module';

import { GuessTeamPage } from './guess-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessTeamPageRoutingModule
  ],
  declarations: [GuessTeamPage]
})
export class GuessTeamPageModule {}
