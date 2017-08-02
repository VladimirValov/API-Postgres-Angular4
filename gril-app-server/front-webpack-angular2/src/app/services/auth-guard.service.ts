import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';

import { AuthService }  from './auth.service'

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate() :boolean {
        // console.log(" AuthGuard   "); 
        // console.log("local-User ", localStorage.getItem('user'));
        // return true;
        // console.log("this.authService.isLoggedAdmin", this.authService.isLoggedAdmin );
        return this.authService.isLoggedAdmin;
    }
}