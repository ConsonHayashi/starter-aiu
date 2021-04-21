import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UserNoPolicy } from '../pages/login/UserResponse';

export class HttpConfig {
  host: string;
  app: string;
  version: string;
  anyDomain: string;
  userDomain: string;
  adminDomain: string;
  coderDomain: string;


  static createHttpConfig(host, app, version): HttpConfig  {
    const theAppHost = `${host}/${app}/${version}`;
    const result: HttpConfig = {host, app, version, 
      anyDomain: `${theAppHost}/any`,
      userDomain: `${theAppHost}/user`,
      adminDomain: `${theAppHost}/admin`,
      coderDomain: `${theAppHost}/coder`,
    } as HttpConfig;
    return result;
  }
  
  static getJsonHttpOptions() {
    return {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  }
}



export interface Jwt {
  auth: String;
  name: String;
  id: number;
}

export interface Screen {
  viewWidth: number;
  viewHeight: number;
  rate: number;
  isWebsite: boolean;
  remFontSize: number;
}

export interface Link {
  name: string;
  router: string;
  icon?: string;
}

export interface GroupInfo {
  name: string;
  qq: string;
  email: string;
}

export interface DevelopInfo {
  name: string;
  phone: string;
  qq: string;
  email: string;
}

export interface StaticLink {
  aboutPage: Link;
  privacyPolicyPage: Link;
  questionPage: Link;
  homePage: Link;
  submitPage: Link;
  worksPage: Link;
  editorPage: Link;
  editorPersonPage: Link;
  editorWorksPage: Link;
  editorWorkAllPage: Link;
  editorWorkTimePage: Link;
  editorWorkThisPage: Link;
  editorWorkPreviewPage: Link;
  editorWorkHistoryPage: Link;
  editorSettingPage: Link;
  editorEditPage: Link;
  eidtorEditClassPage: Link;
  eidtorEditModernPage: Link;
  eidtorEditAncientPage: Link;
  eidtorEditArticlePage: Link;
  loginPage: Link;
  userPage: Link;
  messagePage: Link;
  sharePage: Link;
  settingPage: Link;
}

export const staticLink: StaticLink = {
  questionPage: {name: "常见问题", router: "/question"},
  loginPage: {name: "登陆", router: "/login"},
  aboutPage: {name: "关于我们", router: "/about"},
  privacyPolicyPage: {name: "隐私政策", router: "/privacy-policy"},
  homePage: {name: "主页", router: "/pc/home"},
  submitPage: {name: "投稿", router: "/pc/submit"},
  worksPage: {name: "作品", router: "/pc/works"},
  // --
  editorPage: {name: "审稿", router: "/pc/editor"},
  editorPersonPage: {name: "人员管理", router: "/pc/editor/person"},
  // -
  editorWorksPage: {name: "稿件管理", router: "/pc/editor/works"},
  editorWorkAllPage: {name: "所有稿件管理", router: "/pc/editor/works/all"},
  editorWorkTimePage: {name: "单次投稿稿件管理", router: "/pc/editor/works/time"},
  editorWorkThisPage: {name: "本轮审稿稿件管理", router: "/pc/editor/works/this"},
  editorWorkPreviewPage: {name: "稿件预览", router: "/pc/editor/works/preview"},
  editorWorkHistoryPage: {name: "稿件管理日志", router: "/pc/editor/works/log"},


  editorSettingPage: {name: "审稿设置", router: "/pc/editor/settings"},
  // -
  editorEditPage: {name: "进入审理", router: "/pc/editor/edit"},
  eidtorEditClassPage: {name: "分类稿件", router: "/pc/editor/edit/class"},
  eidtorEditModernPage: {name: "现代诗", router: "/pc/editor/edit/modern"},
  eidtorEditAncientPage: {name: "古典诗词", router: "/pc/editor/edit/ancient"},
  eidtorEditArticlePage: {name: "文章", router: "/pc/editor/edit/article"},

  userPage: {name: "我的", router: "/pc/user", icon: "person-outline"},
  messagePage: {name: "消息", router: "/pc/message", icon: "chatbubble-ellipses-outline"},
  sharePage: {name: "分享", router: "/pc/share", icon: "navigate-outline"},
  settingPage: {name: "设置", router: "/pc/settings", icon: "options-outline"},
} 


@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
 
  private _jwt: Jwt;
  private _screen: Screen;
  private _httpConfig: HttpConfig;
  // private _userNoPolicy: UserNoPolicy;
  private _pcLinks: Link[];
  private _sideLinks: Link[];
  private _staticLinks: StaticLink;
  private _version: string;
  private _copytime: string;
  private _developInfo: DevelopInfo;
  private _groupInfo: GroupInfo;

  constructor() { 
    this.setHttpConfig();
  }
  
  setStaticLink(staticLink) {
    this._staticLinks = staticLink;
  }

  getStaticLink() {
    
    this._staticLinks = staticLink;
    return this._staticLinks;
  }

  setCopytime(copytime) {
    this._copytime = copytime;
  }

  getCopytime() {
    this._copytime = "2020-2021";
    return this._copytime;
  }

  getVersion(): string {
    this._version = "1.0.5";
    return this._version;
  }

  setVersion(version) {
    this._version = version;
  }

  setDeveloperInfo(developInfo: DevelopInfo) {
    this._developInfo = developInfo;
  }

  getDeveloperInfo()  {
    this._developInfo = {name: "董庆林", qq: "1745509482", email: "1745509482@qq.com", phone: "+(86) 15652701912"};
    return this._developInfo;
  }

  setGroupInfo(groupInfo: GroupInfo) {
    this._groupInfo = groupInfo;
  }

  getGroupInfo() {
    this._groupInfo = {name: "河南大学羽帆诗社", qq: "3319532875", email: "yfss1983@163.com"};
    return this._groupInfo;
  }

  getJsonHttpOptions() {
    let options = {headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    if(this.hasJwt()) {
      options.headers = options.headers.append('Authorization', "Bearer " + this.getJwt().auth);
    }
    return options
  }

  hasJwt() {
    let result = true;
    const jwt = this.getJwt();
    if(jwt.auth == undefined || jwt.auth == null || jwt.auth.trim() == "") result = false;
    if(jwt.name == undefined || jwt.name == null || jwt.name.trim() == "") result = false;
    return result; 
}

  public getJwt() : Jwt {
    return this.getCopy(this._jwt);
  }

  public setJwt(v : Jwt) {
    this._jwt = this.getCopy(v);
  }
  

  getScreen(): Screen {
    this.setScreen();
    return this.getCopy(this._screen);
  }

  private setScreen() {
    const viewWidth = document.body.clientWidth;
    const viewHeight = document.body.clientHeight;
    const rate = viewWidth / viewHeight;
    const isWebsite = rate > 1;
    const remFontSize =  viewWidth / 100;
    document.querySelector("html").style.fontSize = remFontSize + "px";
    this._screen = {
      viewWidth,viewHeight, rate, isWebsite, remFontSize
    }
  }

  getHttpConfig(): HttpConfig {
    return this.getCopy(this._httpConfig);
  }

  private setHttpConfig(){
    // const host = 'http://www.dongqinglin.cn';
    const host = 'http://localhost:8080';
    const app = 'flina';
    const version =  '1.0';
    const httpConfig = HttpConfig.createHttpConfig(host, app, version);
    this._httpConfig = this.getCopy(httpConfig);
  }

  // setUserNoPolicy(user: UserNoPolicy) {
  //   this._userNoPolicy = this.getCopy(user);
  // }

  // getUserNoPolicy() {
  //   return this.getCopy(this._userNoPolicy);
  // }

  setPCLink(pcLinks: Link[]) {
    this._pcLinks = this.getCopy(pcLinks);
  }

  getPCLink() {
    this._pcLinks = [];
    this._pcLinks.push(staticLink.homePage);
    this._pcLinks.push(staticLink.submitPage);
    this._pcLinks.push(staticLink.worksPage);
    this._pcLinks.push(staticLink.editorPage);
    return (this._pcLinks);
  }

  setSideLink(sideLinks: Link[]) {
    this._sideLinks = this.getCopy(sideLinks);
  }

  getSideLink(){
    this._sideLinks = [];
    this._sideLinks.push(staticLink.userPage)
    this._sideLinks.push(staticLink.messagePage)
    this._sideLinks.push(staticLink.sharePage)
    this._sideLinks.push(staticLink.settingPage)
    return (this._sideLinks);
  }

  getCopy<T>(obj: T) {
    return Object.assign({}, obj) as T;
  }

  arrayToObj(array: any[]){
    const obj = new Object();
    array.map(key => {obj[key]=null})
    return obj;
  }

  objToArray(res: object): object[] {
    const arr = []
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        const element = res[key];
        arr.push(element);
      } 
    }
    return arr;
  }

  isObjectValueEqual = (a, b) => {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i]
      var propA = a[propName]
      var propB = b[propName]
      if ((typeof (propA) === 'object')) {
        if (this.isObjectValueEqual(propA, propB)) {
          // return true     这里不能return ,后面的对象还没判断
        } else {
          return false
        }
      } else if (propA !== propB) {
        return false
      } else { }
    }
    return true
  }

  


}
