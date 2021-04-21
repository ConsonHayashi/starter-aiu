import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogupPageRoutingModule } from './logup-routing.module';

import { LogupPage } from './logup.page';
import { AppShareModule } from 'src/app/commons/app.share.module';
import { QinglinInputComponent } from 'src/app/components/qinglin-input/qinglin-input.component';

@NgModule({
  imports: [
    AppShareModule,
    LogupPageRoutingModule
  ],
  declarations: [LogupPage]
})
export class LogupPageModule {}
