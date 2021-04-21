import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { AppShareModule } from 'src/app/commons/app.share.module';

@NgModule({
  imports: [
    AppShareModule,
    TabPageRoutingModule
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
