
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/beans/Message';
import { CommonUIService } from 'src/app/commons/common-ui.service';
import { GlobalVariableService } from 'src/app/commons/global-variable.service';
import { TestService } from 'src/app/requests/test.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  constructor(
    private global: GlobalVariableService,
    private testService: TestService,
    private commonUI: CommonUIService
  ) { }

  ngOnInit() {
    this.test();
  }
  test() {
    const id = this.global.getJwt().id;
    this.testService.getList(id).subscribe( (data:Message<any>) => {
      console.log(data)
      this.commonUI.log(data.content)
    });
  }



}
