import { Injectable }       from '@angular/core';
// import { Headers, Http }    from '@angular/http';
// import { HttpClient, HttpParams }           from '@angular/common/http'

import { HttpClient, HttpHeaders, HttpParams }  from '@angular/common/http'

import { Answer } from '../data-class/answer';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
    private reportUrl = '/reports'; 
    // private reportAnswers = 'http://localhost:5000/answers'; 

    constructor(private httpClient: HttpClient) { }


    getSummaryReport(from: Date, to: Date): Promise<any> {   
        // console.log("getSummaryReport",from, to);

        const params = new HttpParams()
            .set('from', from.toString())
            .set('to', to.toString())
            // console.log("params",params)

        return this.httpClient.get(this.reportUrl + '/summary', {params} ).toPromise();
    }

        
    getDetailReport(from: Date, to: Date): Promise<any> {
        // console.log("getDetailReport", from, to);

        const params = new HttpParams()
            .set('from', from.toString())
            .set('to', to.toString())

        return this.httpClient.get(this.reportUrl + '/detail', {params}).toPromise();
    }
}


