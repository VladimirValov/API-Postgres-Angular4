import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';

import { Schedule } from '../data-class/schedule';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ControlDbService {
    private controlUrl = '/control';

    constructor(private http: Http ) {}

    getDbStatus() {
         return this.http.get(this.controlUrl + '/now').toPromise().then(response => response.json())
    }

    getSchedule( from?: Date, to?: Date) : Promise<any> {
        return this.http.get(this.controlUrl).toPromise().then(response => response.json())
    }

    switchDb(rule: any ) :Promise<any> {

        const newRule: any = {
            date: rule.date,
            access: !rule.access
        }

        return (rule.access) 
            ? this.http.delete(this.controlUrl, new RequestOptions({body: newRule}) ).toPromise().then(() => newRule)
            : this.http.post(this.controlUrl, newRule).toPromise().then(response => response.json());
    }

}


