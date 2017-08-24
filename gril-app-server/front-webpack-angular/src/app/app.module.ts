import { NgModule}        from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule }   from 'ng2-charts';

//Http 
import { HttpModule }         from '@angular/http';
import { HttpClientModule }   from '@angular/common/http';
import { HTTP_INTERCEPTORS }  from '@angular/common/http';
import { TokenInterceptor }   from './services/auth-token.interceptor';
import { ErrorInterceptor }   from './services/auth-error.interceptor';


// + Material Component
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  // MdTabsModule,
  MdButtonModule,
  MdDatepickerModule,
  MdNativeDateModule,
  // NativeDateAdapter,
  DateAdapter,
  // MD_DATE_FORMATS,
  MdInputModule,
  MdPaginatorModule
  } from '@angular/material';

import {CustomDateAdapter} from './utils/custom-date-adapter';

//Component
import { AppComponent }           from './app.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component'
import { RadarChartComponent }    from './components/radar-chart/radar-chart.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';
import { DetailReportComponent }  from "./components/detail-report/detail-report.component";
import { ControlDbComponent }     from "./components/control-db/control-db.component";
import { FormLoginComponent }     from './components/form-login/form-login.component';

//Routing
import { RouterModule }     from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

// const MY_DATE_FORMATS = {
// parse: {
//   dateInput: { day: 'numeric', month: 'short', year: 'numeric' }
// },
// display: {
//   dateInput: 'input',
//   monthYearLabel: { year: 'numeric', month: 'long' },
//   dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
//   monthYearA11yLabel: { year: 'numeric', month: 'long' }
// }
// };


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,    
    BrowserAnimationsModule,
    ChartsModule,

    // MdTabsModule,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // {provide: LOCALE_ID, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: CustomDateAdapter},
    // {provide: MD_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
