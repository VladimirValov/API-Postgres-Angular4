import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts';

import { AppComponent }  from './app.component';
import { RadarChartDemoComponent } from './components/radar-chart/radar-chart.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    ChartsModule
    ],
  declarations: [ 
    AppComponent,
    RadarChartDemoComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
