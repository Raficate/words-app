import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessTeamPageRoutingModule } from './guess-team-routing.module';
import { CountdownComponent } from 'ngx-countdown';


import { GuessTeamPage } from './guess-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessTeamPageRoutingModule,
    CountdownComponent
  ],
  declarations: [GuessTeamPage]
})
export class GuessTeamPageModule {}
