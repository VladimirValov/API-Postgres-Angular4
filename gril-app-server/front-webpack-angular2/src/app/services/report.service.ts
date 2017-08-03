import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { HttpClient, HttpHeaders }                 from '@angular/common/http'

import { Answer } from '../data-class/answer';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
    private reportUrl = '/reports'; 
    // private reportAnswers = 'http://localhost:5000/answers'; 


    constructor(private http: Http, private httpClient: HttpClient) { }


    getSummaryReport(from?: Date, to?: Date): Promise<any> {   
        console.log("getSummaryReport",from, to);

        return this.http.get(this.reportUrl + '/summary', {params: {from, to} }).toPromise().then(response => response.json());
    }
        
    getDetailReport(from?: Date, to?: Date): Promise<any> {
        console.log("getDetailReport", from, to);
        return this.http.get(this.reportUrl + '/detail', {params: {from, to} }).toPromise().then(response => response.json());
    }
}