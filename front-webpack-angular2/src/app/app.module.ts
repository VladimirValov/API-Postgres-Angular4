import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';
// import 'chart.js/src/chart.js';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdTabsModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk'
import "@angular/material/prebuilt-themes/indigo-pink.css";

import { AppComponent }  from './app.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { SummaryReportComponent } from './components/summary-report/summary-component';
import { DetailReportComponent } from "./components/detail-report/detail-report";

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,       
    BrowserAnimationsModule,
    MdTabsModule,
    MdTableModule,
    CdkTableModule,
    ChartsModule
    ],
  declarations: [ 
    AppComponent,
    RadarChartComponent,
    SummaryReportComponent,
    DetailReportComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
