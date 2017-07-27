import { Component, Input, OnInit, OnChanges} from '@angular/core';
import {PageEvent} from '@angular/material';

import { MakeParamsService } from '../../services/makeParams.service' 
import { Answer } from '../../data-class/answer';


@Component ({
    selector: 'detail-report',
    templateUrl: './detail-report.component.html',
    styleUrls: ['./detail-report.component.css'],
    providers: [ MakeParamsService ]
})

export class DetailReportComponent {    
    @Input() answers: Answer[];
    @Input() summary: number[];  

    answerSelected: Answer;
    summarySelected:number[];
    radarChartData: any;

    //paginator
    length = 100;
    pageSize = 25;
    pageSizeOptions = [10, 25, 50, 100]
    
    begin = 0;
    end = this.pageSize;    
    
    OnPaginator (params: PageEvent) {      
  
        this.begin = params.pageIndex * params.pageSize;
        this.end = this.begin + params.pageSize
    }      

    constructor(private makeParamsService: MakeParamsService ) {}   


    showSelected(answer:Answer) :void {
        console.log(answer); 
        this.answerSelected = answer;

        this.summarySelected = this.makeParamsService.calcSummary(answer);
        this.radarChartData = this.makeParamsService.dataChart (this.summary, this.summarySelected);     
    }

    hideSelected():void {
        this.answerSelected = null;
    }
}

