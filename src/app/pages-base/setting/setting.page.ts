
import { Component, OnInit } from '@angular/core';
import { AppShareComponent } from 'src/app/commons/app.share.component';
import { CommonUIService } from 'src/app/commons/common-ui.service';
import { GlobalVariableService } from 'src/app/commons/global-variable.service';
import { QinglinRoute } from 'src/app/components/qinglin-route/qinglin-route.component';

const route: QinglinRoute = {
  routeBlockLinK: "/user/settings/user-info",
  routeBlockType: "ionic",
  routeBlockImg: "cube-outline",
  routeBlockName: "精彩内容"
}

const logout: QinglinRoute = {
  routeBlockLinK: "/login",
  routeBlockType: "ionic",
  routeBlockImg: "alert-circle-outline",
  routeBlockName: "退出登陆"
}

export interface SettingProp {
  username: String;
  userState: string;
  userid: number;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  props: SettingProp;
  route = Object.assign({}, route);
  logout   = Object.assign({}, logout);
  constructor(
    private commonUI: CommonUIService,
    private global: GlobalVariableService
  ) { }

  ngOnInit() {
    this.initProp();
  }
  initProp() {
    const jwt = this.global.getJwt();
    this.props = {
      userState: "runing",
      userid: jwt.id,
      username: jwt.name
    }
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}

