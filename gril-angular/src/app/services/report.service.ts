import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DATA } from './mock-report';

@Injectable()
export class ReportService {
    private reportUrl = 'http://localhost:5000/reports'; 

    constructor(private http: Http) { }

    getReport(): Promise<any> { 
        return Promise.resolve(DATA);
        // return this.http.get(this.reportUrl)
        //     .toPromise()
        //     .then((response) => {
        //         console.log(response);
        //         return response;
        //     })
    }    
}