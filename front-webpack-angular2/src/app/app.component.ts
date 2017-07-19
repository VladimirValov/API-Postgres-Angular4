import { Component, OnInit } from '@angular/core';

import { ReportService } from './services/report.service' 

import '../assets/css/styles.css';
// import  "chart.js/dist/Chart.bundle.min.js";


@Component({
  selector: 'gril-app',
  templateUrl:'./app.component.html',
  providers: [ ReportService ]
})

export class AppComponent implements OnInit { 
  name = 'Gril App'; 
  count: number;
  data:any = {};
  summary: Array<number> = [];

  calcTotal( data:any ): Array<number> {
    let arr = [];
    
    arr[0] =  (data.society + data.lonely) / 2;
    arr[1] =  (data.drink + data.hash) / 2;
    arr[2] =  (data.feel + data.relation) / 2;
    arr[3] =  data.economy;
    arr[4] =  (data.community + data.contribute) / 2;
    arr[5] =  (data.smoke + data.snus) / 2;
    arr[6] =  (data.sex + data.deny) / 2;

    return arr; 
  }

  constructor(private reportService: ReportService ) {}

  ngOnInit():void {   
    this.reportService.getReport().then((report) => {
      console.log(report);   
      this.data = report.data;
      this.count = report.count;
      this.summary =  this.calcTotal(this.data);           
    })    
  }
}





