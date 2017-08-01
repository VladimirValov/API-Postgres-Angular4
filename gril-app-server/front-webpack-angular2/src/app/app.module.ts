import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MdTabsModule,
  MdButtonModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdInputModule,
  MdPaginatorModule
  } from '@angular/material';

import { ChartsModule } from 'ng2-charts';

import "@angular/material/prebuilt-themes/indigo-pink.css";
import '../assets/css/styles.css';

import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { DetailReportComponent } from "./components/detail-report/detail-report.component";
import { ControlDbComponent } from "./components/control-db/control-db.component";
import { FormLoginComponent } from './components/form-login/form-login.component';


import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,    
    BrowserAnimationsModule,
    ChartsModule,

    MdTabsModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdPaginatorModule,

    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    FormLoginComponent,
    DashboardComponent,
    RadarChartComponent,
    SummaryReportComponent,
    DetailReportComponent,
    ControlDbComponent    
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
