import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BasicAuthenticationService } from './basic-authentication.service';
=======
>>>>>>> b5a13028f9b171676dcd826ab8e2b06e425ed18f


@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

<<<<<<< HEAD
  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept (request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'craig';
    // let password = 'puppy';
    // let basicAuthHeaderString='Basic ' +window.btoa(username+':'+password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
let username = this.basicAuthenticationService.getAuthenticatedUser()

if(basicAuthHeaderString && username ){
=======
  constructor() { }

  intercept (request: HttpRequest<any>, next: HttpHandler) {
    let username = 'craig';
    let password = 'puppy';
    let basicAuthHeaderString='Basic ' +window.btoa(username+':'+password);
>>>>>>> b5a13028f9b171676dcd826ab8e2b06e425ed18f

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
<<<<<<< HEAD
  }
=======
>>>>>>> b5a13028f9b171676dcd826ab8e2b06e425ed18f
    return next.handle(request);
}
}





