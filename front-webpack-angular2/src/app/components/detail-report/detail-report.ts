import { Component, Input } from '@angular/core';

@Component ({
    selector: 'detail-report',
    templateUrl: './detail-report.html',
    styleUrls: ['./detail-report.css']
})

export class DetailReportComponent {
    @Input() answers: any    
}

