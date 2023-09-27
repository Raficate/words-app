import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundsPageRoutingModule } from './rounds-routing.module';

import { RoundsPage } from './rounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundsPageRoutingModule
  ],
  declarations: [RoundsPage]
})
export class RoundsPageModule {}
