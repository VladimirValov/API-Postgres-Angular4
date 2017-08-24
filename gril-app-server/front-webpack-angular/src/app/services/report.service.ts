import { Injectable }       from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }  from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Answer } from '../data-class/answer';

@Injectable()
export class ReportService {
    private reportUrl = '/reports'; 

    constructor(private httpClient: HttpClient) { }


    getSummaryReport(from: Date, to: Date): Promise<any> {   
        // console.log("getSummaryReport",from, to);

        const params = new HttpParams()
            .set('from', from.toString())
            .set('to', to.toString())

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


