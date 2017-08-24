import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http'

import { AuthService }  from './auth.service'


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   

        const tokenReq = req.clone({ headers: new HttpHeaders().set('Authorization', `Bearer ${ this.authService.token }`) });
        
        // console.log("TokenInterceptor set Header: Authorization: Token " + req.url);
        
        return next.handle(tokenReq);
    }
}

// 
// if there is header
// const tokenReq = req.clone({
//     setHeaders: {              
//         Authorization: `Bearer ${this.auth.getToken()}`,
//         myheader: 'myheader'
//     }
// })

