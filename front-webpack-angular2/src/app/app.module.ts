import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';

import { AppComponent }  from './app.component';
import { RadarChartDemoComponent } from './components/radar-chart/radar-chart.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    ChartsModule,
    HttpModule
    ],
  declarations: [ 
    AppComponent,
    RadarChartDemoComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
