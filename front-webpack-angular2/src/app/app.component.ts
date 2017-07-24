import { Component, OnInit, Input } from '@angular/core';

import { ReportService } from './services/report.service';
import { MakeParamsService } from './services/makeParams.service';

import { Answer } from './data-class/answer';


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
  dateFrom: Date ;
  dateTo: Date ;  
  status: string;

  constructor(private reportService: ReportService, private makeParams: MakeParamsService ) {}
  
  getSummaryReport(from: Date, to: Date) :void {
    this.status = 'Receive data...'

    this.reportService.getSummaryReport(from, to).then(report => {       
      this.data = report;
      this.summary = this.makeParams.calcSummary(this.data);
      this.radarChartData = this.makeParams.dataChart(this.summary);     

      this.status = `Successfully received ${this.data.count} entries!`  
    });
  }

  getDetailReport(from: Date, to: Date) :void  {
    this.reportService.getDetailReport().then(report => {
          // console.log(report);
          this.detail = report; 
        })
  }


  // get a report based on the Datepicke
  getReportByDate (from: Date, to: Date) :void {
    console.log(from, to);
    this.getSummaryReport(from, to);
    this.getDetailReport(from, to);
  }
  

  ngOnInit():void {   
    let date = new Date();
    date.setDate( date.getDate() - 10 );

    this.dateFrom = date;
    this.dateTo = new Date();

    this.getSummaryReport(this.dateFrom, this.dateTo);
    this.getDetailReport(this.dateFrom, this.dateTo);   
  }
}