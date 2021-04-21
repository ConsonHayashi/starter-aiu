import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { AppShareModule } from 'src/app/commons/app.share.module';
import { QinglinRouteComponent } from 'src/app/components/qinglin-route/qinglin-route.component';
import { MaterialModule } from 'src/app/app-material.module';

@NgModule({
  imports: [
    AppShareModule,
    SettingPageRoutingModule
  ],
  declarations: [
    SettingPage
  ]
})
export class SettingPageModule {}
