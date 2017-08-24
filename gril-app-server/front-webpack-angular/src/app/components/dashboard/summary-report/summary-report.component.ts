import { Component, Input } from '@angular/core';

import { Answer } from '../../../data-class/answer';


@Component ({
    selector: 'summary-report',
    templateUrl: './summary-report.component.html',
    styleUrls: ['summary-report.component.css']
})

export class SummaryReportComponent {
    @Input() data: Answer;
    @Input() summary: number[];    
}

