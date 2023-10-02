import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsViewAltPageRoutingModule } from './teams-view-alt-routing.module';

import { TeamsViewAltPage } from './teams-view-alt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsViewAltPageRoutingModule
  ],
  declarations: [TeamsViewAltPage]
})
export class TeamsViewAltPageModule {}
