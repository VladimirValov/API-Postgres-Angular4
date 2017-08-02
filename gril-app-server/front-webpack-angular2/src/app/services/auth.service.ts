import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../data-class/user';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class AuthService {
    private loginUrl = '/login';

    constructor(private http: Http) {}  
    
    localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    token:string =          this.localUser ? this.localUser.user.token : "";
    isLoggedAdmin:boolean = this.localUser ? this.localUser.user.isAdmin : false;   



    setUser(user: any) :void {

        localStorage.setItem('user', JSON.stringify({user}) );
        this.isLoggedAdmin = user.isAdmin;
        this.token = user.token;      
    }


    login(user: User) :Promise<any>{  

        return this.http.post(this.loginUrl, user).toPromise().then(response => {
            console.log(response);
            this.localUser = response.json();            

            this.setUser(this.localUser );

            this.setUser(this.localUser.token );

            return this.isLoggedAdmin;

        }).catch(err => {
            console.log(err);
            return false
        });
    }



    logout() :void {
       localStorage.clear()        
    }

    

}

