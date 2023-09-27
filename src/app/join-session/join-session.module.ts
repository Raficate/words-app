import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinSessionPageRoutingModule } from './join-session-routing.module';

import { JoinSessionPage } from './join-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinSessionPageRoutingModule
  ],
  declarations: [JoinSessionPage]
})
export class JoinSessionPageModule {}
