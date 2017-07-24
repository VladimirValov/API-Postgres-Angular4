import { Component, Input } from '@angular/core';

import { Answer } from '../../data-class/answer';


@Component ({
    selector: 'summary-report',
    templateUrl: './summary-report.html',
    styleUrls: ['summary-report.css']
})

export class SummaryReportComponent {
    @Input() data: Answer;
    @Input() summary: number[];    
}

