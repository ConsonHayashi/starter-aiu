import { HttpClient } from "@angular/common/http";
import { AppPrivateRequestConfig } from "./app.share.request.config";

export class AppShareRequestService<T> {

  private ipOrDomain: string;
  private port: string;
  private commonUrl: string;
  
  constructor(
    private http: HttpClient
  ){
    this.ipOrDomain = AppPrivateRequestConfig.getIPOrDomain();
    this.port = AppPrivateRequestConfig.getPort();
  }

  public setCommonUrl(commonUrl: String) {
    commonUrl = commonUrl.trim();
    if(!commonUrl.startsWith("/")) commonUrl = "/" + commonUrl;
    if(!commonUrl.endsWith("/")) commonUrl = commonUrl + "/";
    this.commonUrl = this.ipOrDomain + ":" + this.port + commonUrl;
  }

  public getCommonUrl() {
    if(this.commonUrl.length == 0) throw Error("您需要优先setCommonUrl，才能够使用它");
    return this.commonUrl;
  }

  public get() {
    
  }

  public post() {

  }

  public put() {

  }

  public delete() {

  }

  public static upload() {

  }

  public static download() {

  }

}

