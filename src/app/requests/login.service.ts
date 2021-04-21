import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/operators';
import { UserGetVerficationRequest, UserResetPasswordRequest, UserSignInRequest, UserSignUpRequest } from '../beans/UserRequest';
import { CommonHTTPService } from '../commons/common-http.service';
import { GlobalVariableService, HttpConfig } from '../commons/global-variable.service';
import { CommonUIService } from '../commons/common-ui.service';
import { MessageResponse, SignUpResponse } from '../beans/Response';
import { getDESCtypt } from '../converters/Crypt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api: string = this.globle.getHttpConfig().anyDomain + "/user";
  private options = HttpConfig.getJsonHttpOptions();
  
  constructor(
    private http: HttpClient,
    private commonHttp: CommonHTTPService,
    private globle: GlobalVariableService,
    private commonUI: CommonUIService
  ) {  }

  signIn(data: UserSignInRequest) {
    const signInUrl = `${this.api}/log-in`;
    // const params = typeof(data)==='object' && String(data) !== '[object File]'? this.paramFormat(data): data;
    const signInData = this.globle.getCopy(data);
    signInData.password = getDESCtypt(signInData.password);
    console.log(signInData.password)
    window.localStorage.removeItem('jwt')

    return this.http.post(signInUrl, signInData, this.options).pipe(
      retry(3),
      tap(_ => console.log(`sign-in-request`)),
     catchError(this.commonHttp.handleError('signIn()'))
    );
  }

  
  signUp(data: UserSignUpRequest) {
    const signUpUrl = `${this.api}/log-up`
    const signUpData = this.globle.getCopy(data);
    signUpData.password = getDESCtypt(signUpData.password);
    // signUpData.password = getDESCtypt(signUpData.password);
    return this.http.post(signUpUrl, signUpData, this.options).pipe(
      retry(3),
      tap((signUpRes: SignUpResponse) => {
        if(signUpRes.state){
          this.commonUI.log(`${signUpRes.msg}，请`,`登录账户`);
        }else{
          this.commonUI.log(`${signUpRes.msg}，请`,`注册新账户`);
        }
      }),
     catchError(this.commonHttp.handleError('signUp()'))
    );
  }


  requestCode(value: UserGetVerficationRequest) {
    const requestCodeUrl = `${this.api}/verification-code`;
    return this.http.post<MessageResponse>(requestCodeUrl, value, this.options).pipe(
        retry(3),
        catchError(this.commonHttp.handleError('requestCode()'))
    )
  }

  resetPassword(value: UserResetPasswordRequest) {
    const requestCodeUrl = `${this.api}/reset-password`;
    value.password = getDESCtypt(value.password);
    return this.http.post<MessageResponse>(requestCodeUrl, value, this.options).pipe(
        retry(3),
        catchError(this.commonHttp.handleError('requestCode()'))
    )
  }

}
