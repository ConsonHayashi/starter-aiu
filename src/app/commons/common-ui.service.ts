
import { ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToastController } from '@ionic/angular';
import { GlobalVariableService, Screen } from './global-variable.service';



@Injectable({
  providedIn: 'root'
})
export class CommonUIService{

  private myToast;
  constructor(
    private toast: ToastController,
    private snackBar: MatSnackBar,
    private globalVairable: GlobalVariableService
  ) {  }
 
  log(message: any, action: string="我知道了"){
    if(message == null || message == undefined || message.trim() == '') message = "空内容"
    if(this.isWebsite()){
      // console.log(111)
      this.showSnackBarWith(message, action);
    }else {
      // console.log(222)
      this.showToast(message, action);
    }
  }

  private showToast(message: string, action: string="我知道了") {
    this.myToast = this.toast.create({
      message: message.toString(),
      position: 'top',
      animated: true,
      cssClass: ["my-toast"],
      mode: "ios",
      buttons: [action],
      duration: 2000
    }).then((toastData)=>{
      // console.log(toastData);
      toastData.present();
    });
    // const jwt = this.globalVairable.getJwt();
    // console.log(jwt)
  }
  hideToast() {
    this.myToast = this.toast.dismiss();
  }


  private showSnackBarWith(message, action="我知道了"){
    this.snackBar.open(message, action, {
        politeness: 'off',
        duration: 2000,
        horizontalPosition: 'end',      
        verticalPosition: 'top'
    });
  }

  isWebsite(){
    let result = false;
    const screen: Screen = this.globalVairable.getScreen();
    result = screen.isWebsite;
    return result;
  }


}
