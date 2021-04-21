import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AppShareModule } from 'src/app/commons/app.share.module';
import { QinglinInputComponent } from 'src/app/components/qinglin-input/qinglin-input.component';

@NgModule({
  imports: [
    AppShareModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
