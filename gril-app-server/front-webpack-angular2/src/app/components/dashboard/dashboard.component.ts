import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service' 
import { ReportService } from '../../services/report.service';
import { MakeParams } from '../../utils/make-params';


import { Answer } from '../../data-class/answer';

@Component({
  selector: 'dashboard',
  templateUrl:'./dashboard.component.html',
  providers: [ 
    ReportService,
    MakeParams
  ]
})


export class DashboardComponent implements OnInit { 
  name = 'Gril App'; 
  count: number;
  data:any = {};
  radarChartData: any;
  summary: number[] = [];
  detail: Answer[];

  dateFrom = new Date();
  dateTo = new Date();  
  maxDate= new Date();

  status: string;

  constructor(
    public authService: AuthService,
    private reportService: ReportService,
    private makeParams: MakeParams,  
  ) { }


  logout() :void {
    this.authService.logout();
  }
  
  
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
          this.detail = report; 
    })
  }


  getReportByDate (from: Date, to: Date) :void {

    from.setHours(0, 0, 0);
    to.setHours(23, 59, 59 );    

    this.getSummaryReport(from, to);
    this.getDetailReport(from, to);
  }
  

  ngOnInit():void {  
    this.getReportByDate(this.dateFrom, this.dateTo);
  }
}