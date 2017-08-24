import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../data-class/user';
import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router'


@Injectable()

export class AuthService {
    private loginUrl = '/login';

// ! HttpClient Causes a cyclic dependency error, becouse use http

    constructor(private http: Http, private router: Router) {}      
    
    localUser =             JSON.parse(localStorage.getItem('user'));
    token:string =          this.localUser ? this.localUser.token : "";
    isLoggedAdmin:boolean = this.localUser ? this.localUser.isAdmin : false;     

    
    checkAutorization() :void {
        if (this.isLoggedAdmin) this.router.navigateByUrl('/dashboard');  
    }


    setUser(user: any) :void {     

        localStorage.setItem('user', JSON.stringify(user) );
        this.isLoggedAdmin = user.isAdmin;
        this.token = user.token;          
    }


    login(user: User) :Promise<any>{  

        return this.http.post(this.loginUrl, user).toPromise().then(response => {
            // console.log(response);
            this.localUser = response.json();  

            this.setUser(this.localUser );

            this.router.navigateByUrl('/dashboard');

            return this.isLoggedAdmin;

        }).catch(err => {
            console.log(err);
            return false
        });
    }


    logout() :void {
       localStorage.clear();
       this.isLoggedAdmin = false;
       this.router.navigateByUrl('');   
    }   

}

