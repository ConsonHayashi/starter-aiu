import { Injectable } from '@angular/core';
import { CommonUIService } from './common-ui.service';

@Injectable({
  providedIn: 'root'
})
export class CommonDealService {

  constructor(
    private commonUI: CommonUIService,
  ) {

  }

  copyToClip(word: string, successMessage: string) {
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', word)
    document.body.appendChild(input)
    input.setSelectionRange(0, 9999)
    input.select()
    if (document.execCommand('Copy')) {
      // document.execCommand('Copy');
      this.commonUI.log(successMessage);

    }
    document.body.removeChild(input)
  }


  doGetCaretPosition(srcElem) {//获取光标在文本内容中的index编号
       var oField = srcElem
      // Initialize
      var iCaretPos = 0;
    
      // IE Support
      if (document['selection']) {
        // Set focus on the element
        oField.focus();
        // To get cursor position, get empty selection range
        var oSel = document['selection'].createRange();
        // Move selection start to 0 position
        oSel.moveStart('character', -oField['value'].length);
        // The caret position is selection length
        iCaretPos = oSel.text.length;
      }      // Firefox support
      else if (oField['selectionStart'] || oField['selectionStart'] == '0')
        iCaretPos = oField['selectionStart'];
      return iCaretPos;
      // Return results
    //   alert(iCaretPos);
      var valueIndex=iCaretPos;
      var strLen=oField['value'].length;
      if(valueIndex==strLen&&strLen>0){
        var changeValue=oField['value'].substr(0,strLen-1);
        oField['value']=changeValue;
      }else if(valueIndex!=strLen&&valueIndex>0){
        var changeValue=oField['value'].substr(0,valueIndex-1)+oField['value'].substr(valueIndex);
         oField['value'].changeValue;
      }

      this.setCursorPosition(oField, (valueIndex-1));
    }
    
    setCursorPosition(ctrl, pos){ //设置光标位置
      if(ctrl.setSelectionRange){
          ctrl.focus();
          ctrl.setSelectionRange(pos,pos);
      }else if (ctrl.createTextRange) {
          var range = ctrl.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
      }
    }

  // backTop() {

  //   const timer = setInterval(function () {
  //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //     var ispeed = Math.floor(-scrollTop / 6);
  //     console.log(ispeed)
  //     if (scrollTop == 0) {
  //       clearInterval(timer);
  //     }
  //     document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
  //   }, 30)
  //   console.log(document.body.scrollTop, document.documentElement.scrollTop)
  // }

  backTop() {
    const scrollElement = document.querySelector("#scroll")
    const timer = setInterval(function () {
      
      var scrollTop = scrollElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-scrollTop / 6);
      console.log(ispeed)
      if (scrollTop == 0) {
        clearInterval(timer);
      }
      scrollElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
    }, 30)
    console.log(document.body.scrollTop, scrollElement.scrollTop)
  }
}
