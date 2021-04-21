import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { map } from 'rxjs/operators';
import { CommonDealService } from 'src/app/commons/common-deal.service';

type QinglinInputType = "verification-code";

export interface QinglinInput {
  control: FormControl;
  labelStr: string;
  type: QinglinInputType | string;
}

@Component({
  selector: 'app-qinglin-input',
  templateUrl: './qinglin-input.component.html',
  styleUrls: ['./qinglin-input.component.scss'],
})
export class QinglinInputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() labelStr: string;
  @Input() type: string;
  @Output() clickVerification = new EventEmitter();
  passwordType = "password"
  constructor(
    private commonDeal: CommonDealService
  ) { }


  ngOnInit() {}
  showPass() {
    // console.log(1111)
    this.passwordType = "text";
  }
  hidePass() {
    // console.log(2222)
    this.passwordType = "password";
  }

  clearContent(formControl: FormControl) {
    formControl.setValue("");
  }
  hasContent(formControl: FormControl){
    return formControl.value.trim().length != 0;
  }
  
  getControl() {
    return this.control as FormControl;
  }

  getVerificationCode(){
    this.clickVerification.emit();
  }

  focus(event){
    // console.log(event);
    
    let input = event.srcElement;
    // console.log(typeof input);
    // console.log(this.commonDeal.doGetCaretPosition(input));
    
    input.focus();
    // this.commonDeal.setCursorPosition(input, 1)
    // // input.addEventListener('mousedown')
    // // input.addEventListener('mouseup', ()=> {})
    // console.log(MatInput)

  }
}
