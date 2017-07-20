import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
    private reportUrl = 'http://localhost:5000/reports'; 
    private reportAnswers = 'http://localhost:5000/answers'; 

    constructor(private http: Http) { }

    getSummaryReport(): Promise<any> { 
        // return Promise.resolve(DATA);
        return this.http.get(this.reportUrl).toPromise().then((response) => response.json());
    }
        
    getDetailReport() : Promise<any> {
        return this.http.get(this.reportAnswers).toPromise().then(response => response.json());
    }
}