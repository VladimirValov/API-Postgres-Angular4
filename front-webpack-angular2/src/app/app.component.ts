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

    this.reportService.getDetailReport(from, to).then(report => {
          // console.log(report);
          this.detail = report; 
        })
  }


  // get a report based on the Datepicker
  getReportByDate (from: Date, to: Date) :void {
    //fix time
    from.setHours(0, 0, 0);
    to.setHours(23, 59, 59 );    

    this.getSummaryReport(from, to);
    this.getDetailReport(from, to);
  }
  

  ngOnInit():void {  
    this.getReportByDate(new Date(), new Date());
  }
}