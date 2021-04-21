import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap } from 'rxjs/operators';
import { CommonHTTPService } from '../commons/common-http.service';
import { CommonUIService } from '../commons/common-ui.service';
import { GlobalVariableService, HttpConfig } from '../commons/global-variable.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private api: string = this.globle.getHttpConfig().userDomain + "/works";
  private options = this.globle.getJsonHttpOptions();

  constructor(
    private http: HttpClient,
    private commonHttp: CommonHTTPService,
    private globle: GlobalVariableService,
    private commonUI: CommonUIService
  ) { }

  getList(userid) {
    console.log(this.options);
    
    const getWorksList = this.api + "/" + userid;

    return this.http.get(getWorksList, this.options).pipe(
      retry(3),
      tap(_ => console.log(`getList-request`)),
     catchError(this.commonHttp.handleError('getList()'))
    );
  }


  
}
