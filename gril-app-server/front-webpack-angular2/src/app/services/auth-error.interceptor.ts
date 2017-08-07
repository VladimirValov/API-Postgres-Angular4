import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs/Observable';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { AuthService }  from './auth.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

   constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).do(event => {}, err => {
            if (err instanceof HttpErrorResponse && err.status == 401) {
                this.authService.logout();
                console.log(" Ошибка авторизации ");
            }
        });
    }
}

