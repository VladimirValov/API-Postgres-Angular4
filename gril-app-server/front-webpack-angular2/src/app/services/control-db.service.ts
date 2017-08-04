import { Injectable }                       from '@angular/core';
// import { RequestOptions, Headers, Http }    from '@angular/http';
import { HttpClient, HttpParams }           from '@angular/common/http'
import { AuthService }                      from './auth.service'
import { Schedule }                         from '../data-class/schedule';

// import {Observable}                         from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ControlDbService {
    private controlUrl = '/control';

    constructor( private httpClient: HttpClient ) {}

    getDbStatus() :Promise<Schedule> {
        return this.httpClient.get<Schedule>(this.controlUrl + '/now').toPromise()     
    }

    getSchedule( from?: Date, to?: Date) : Promise<Schedule[]> {
        return this.httpClient.get<Schedule[]>(this.controlUrl).toPromise()
    }

    switchDb(rule: Schedule ) :Promise<any> {
        const newRule: any = {
            date: rule.date,
            access: !rule.access
        }

        const params = new HttpParams().set('date', rule.date.toString())


        return (rule.access)    ? this.httpClient.delete(this.controlUrl, {params}  ).toPromise().then(() => newRule)
                                : this.httpClient.post(this.controlUrl, newRule).toPromise();
    }
}


