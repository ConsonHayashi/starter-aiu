import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassPageRoutingModule } from './pass-routing.module';

import { PassPage } from './pass.page';
import { QinglinInputComponent } from 'src/app/components/qinglin-input/qinglin-input.component';
import { AppShareModule } from 'src/app/commons/app.share.module';
import { QinglinRouteComponent } from 'src/app/components/qinglin-route/qinglin-route.component';

@NgModule({
  imports: [
    AppShareModule,
    PassPageRoutingModule
  ],
  declarations: [PassPage]
})
export class PassPageModule {}
