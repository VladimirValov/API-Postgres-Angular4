import { Component, Input } from '@angular/core';

@Component ({
    selector: 'summary-report',
    templateUrl: './summary-report.html'
})

export class SummaryReportComponent {
    @Input() data: any;
    @Input() summary: number[];
    
}

