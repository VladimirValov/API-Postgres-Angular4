import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule }   from 'ng2-charts';

//Http 
import { HttpModule }         from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS }  from '@angular/common/http';
import { TokenInterceptor }   from './services/auth-token.interceptor';

//Style + Material Component
import "@angular/material/prebuilt-themes/indigo-pink.css";
import '../assets/css/styles.css';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MdTabsModule,
  MdButtonModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdInputModule,
  MdPaginatorModule
  } from '@angular/material';

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


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    HttpClientModule,
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
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    } ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
