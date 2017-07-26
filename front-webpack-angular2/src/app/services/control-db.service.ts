import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Schedule } from '../data-class/schedule';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ControlDbService {
    private controlUrl = 'http://localhost:5000/control';

    constructor(private http: Http ) {}

    getSchedule( from?: Date, to?: Date) : Promise<any> {
        return this.http.get(this.controlUrl).toPromise().then(response => response.json())
    }

}
