import { Component, Input, OnInit, OnChanges} from '@angular/core';

import { MakeParamsService } from '../../services/makeParams.service' 
import { Answer } from '../../data-class/answer';


@Component ({
    selector: 'detail-report',
    templateUrl: './detail-report.html',
    styleUrls: ['./detail-report.css'],
    providers: [ MakeParamsService ]
})

export class DetailReportComponent {    
    @Input() answers: Answer[];
    @Input() summary: number[];

    answerSelected: Answer;
    summarySelected:number[];
    radarChartData: any;

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

