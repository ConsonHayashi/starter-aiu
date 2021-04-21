import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../app-material.module";
import { QinglinInputComponent } from "../components/qinglin-input/qinglin-input.component";
import { QinglinRouteComponent } from "../components/qinglin-route/qinglin-route.component";

// BrowserAnimationsModule error repeat dependency BrowserModule
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    QinglinInputComponent,
    QinglinRouteComponent
  ],
  declarations:[
    QinglinInputComponent,
    QinglinRouteComponent
  ]
})
export class AppShareModule {

}