import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/beans/Message';
import { CommonUIService } from 'src/app/commons/common-ui.service';
import { GlobalVariableService } from 'src/app/commons/global-variable.service';
import { LoginService } from 'src/app/requests/login.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

 
  isProgressCircleShow = false;
  isLoginShow: boolean = true;
  isLogupShow: boolean = false;
  isResetShow: boolean = false;
  loginForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });
  logupForm = new FormGroup({
    "email": new FormControl("", Validators.required),
    "username": new FormControl("", Validators.required),
    "password": new FormControl()
  });
  resetForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "code": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  get loginFormValue() { return Object.assign({}, this.loginForm.value) }
  get logupFormValue() { return Object.assign({}, this.logupForm.value) }
  get resetFormValue() { return Object.assign({}, this.resetForm.value) }

  constructor(
    private commonUI: CommonUIService,
    private loginService: LoginService,
    private router: Router,
    private global: GlobalVariableService,

  ) { }

  ngOnInit() {
    // this.commonUI.showToast("今天吃饭很香");
    // this.commonUI.log("今天吃饭很香");
  }

 
  logup() {
    if (this.logupForm.valid) {
      console.log("合法");
      this.loginService.signUp(this.logupForm.value).subscribe((data: Message<any>) => this.logUpCallback(data));
    }
  }

  logUpCallback(msg: Message<any>) {
    if( msg.status == 504 ) {
      this.commonUI.log("注册失败");
    } else if(msg.status == 200) {
      this.commonUI.log("注册成功");
      const user = this.global.getCopy(this.logupForm.value);
      delete user.email;
      this.loginForm.setValue(this.global.getCopy(user));
      this.showLoginForm();
    }
  }

  getVerificationCode() {
    // console.log("获取验证码")
    
    const request = {email: this.resetForm.get("email").value}
    this.loginService.requestCode(request).subscribe((data: Message<any>) => this.getVerificationCodeCallback(data))
  }

  getVerificationCodeCallback(msg: Message<any>){
    // console.log(msg);
    if( msg.status == 504 ) {
      this.commonUI.log("获取验证码失败");
    } else if (msg.status == 200 ){
      this.commonUI.log("获取验证码成功");
      this.resetForm.get("code").setValue(msg.content);
    }
  }

  reset() {
    if (this.resetForm.valid) {
      // console.log("合法");
      this.loginService.resetPassword(this.resetForm.value).subscribe((data: Message<any>) => this.resetCallback(data))
    }
  }

  resetCallback(msg: Message<any>){
    console.log(msg);
    this.commonUI.log(msg.content);
    const user = this.global.getCopy(this.resetForm.value);
    delete user.code;
    delete user.email;
    this.loginForm.setValue(this.global.getCopy(user));
    this.showLoginForm();
    this.router.navigate(['/login'])
  }

  checkNotBlank(obj: object) {
    let result = true;
    const keys = Object.keys(obj);
    if (keys.length == 0) return false;
    keys.map(key => {
      const value = obj[key];
      // console.log(key, value);
      // console.log(value == undefined || value == NaN || value == null || value.trim().length == 0)
      if (value == undefined || value == NaN || value == null || value.trim().length == 0) result = false;
    })
    return result;
  }
  showLoginForm() {
    console.log("show loginForm")
    this.isLoginShow = true;
    this.isLogupShow = false;
    this.isResetShow = false;
  }

  showLogupForm() {
    console.log("show logupForm")
    this.isLoginShow = false;
    this.isLogupShow = true;
    this.isResetShow = false;
  }
  showResetForm() {
    console.log("show resetForm")
    this.isLoginShow = false;
    this.isLogupShow = false;
    this.isResetShow = true;
  }

}
