import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
// + Material Component
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MdButtonModule,
  MdInputModule,
  MdPaginatorModule,

  MdDatepickerModule,
  MdNativeDateModule,
  DateAdapter
  } from '@angular/material';

import { CustomDateAdapter } from '../../utils/custom-date-adapter';

import { DashboardComponent }     from './dashboard.component'
import { RadarChartComponent }    from './radar-chart/radar-chart.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { DetailReportComponent }  from "./detail-report/detail-report.component";
import { ControlDbComponent }     from "./control-db/control-db.component";


@NgModule({
    imports: [ 
        CommonModule,
        ChartsModule,
        FormsModule,
        //Material Component
        BrowserAnimationsModule,
        MdButtonModule,
        MdDatepickerModule,
        MdNativeDateModule,        
        MdInputModule,
        MdPaginatorModule,
    ],
    declarations: [
        DashboardComponent,
        RadarChartComponent,
        SummaryReportComponent,
        DetailReportComponent,
        ControlDbComponent    
    ],
    exports: [ DashboardComponent ],
    providers: [
        { provide: DateAdapter, useClass: CustomDateAdapter }
    ]
 })
export class DashboardModule {}