import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopingPageRoutingModule } from './developing-routing.module';

import { DevelopingPage } from './developing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopingPageRoutingModule
  ],
  declarations: [DevelopingPage]
})
export class DevelopingPageModule {}
