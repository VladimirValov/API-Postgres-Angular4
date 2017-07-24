import { Component, OnInit, Input } from '@angular/core';

import { ReportService } from './services/report.service';
import { MakeParamsService } from './services/makeParams.service';

import { Answer } from './data-class/answer'


import '../assets/css/styles.css';
// import  "chart.js/dist/Chart.bundle.min.js";


@Component({
  selector: 'gril-app',
  templateUrl:'./app.component.html',
  providers: [ 
    ReportService,
    MakeParamsService
  ]
})

export class AppComponent implements OnInit { 
  name = 'Gril App'; 
  count: number;
  data:any = {};
  radarChartData: any;
  summary: number[] = [];
  detail: Answer[];
  dateFrom: Date;
  dateTo: Date;  


  constructor(private reportService: ReportService,
              private makeParamsService: MakeParamsService ) {}



  ngOnInit():void {   
    this.reportService.getSummaryReport().then((report) => {
      console.log(report);   
      this.data = report;     
      this.summary =  this.makeParamsService.calcSummary(this.data);   
      this.radarChartData = this.makeParamsService.dataChart(this.summary);    
    })

    this.reportService.getDetailReport().then(report => {
      console.log(report);
      this.detail = report; 
    })
  }
}





