import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsViewPageRoutingModule } from './teams-view-routing.module';

import { TeamsViewPage } from './teams-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsViewPageRoutingModule
  ],
  declarations: [TeamsViewPage]
})
export class TeamsViewPageModule {}
