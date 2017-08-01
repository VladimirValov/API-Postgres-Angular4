import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../data-class/user';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class UserService {
    private loginUrl = '/login';

    constructor(private http: Http) {}

     Authorize(user: User) :Promise<any> {
        return this.http.post(this.loginUrl, user).toPromise().then(response => response.json());
     }
}

