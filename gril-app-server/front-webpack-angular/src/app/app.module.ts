import { NgModule}            from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { HttpModule }         from '@angular/http';
import { HttpClientModule }   from '@angular/common/http';

import { HTTP_INTERCEPTORS }  from '@angular/common/http';
import { TokenInterceptor }   from './services/auth-token.interceptor';
import { ErrorInterceptor }   from './services/auth-error.interceptor';

import { RouterModule }       from '@angular/router'
import { AppRoutingModule }   from './app-routing.module'

import { AppComponent }       from './app.component';
import { DashboardModule }    from './components/dashboard/dashboard.module'
import { FormLoginModule }    from './components/form-login/form-login.module'


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    HttpClientModule,

    AppRoutingModule,
    DashboardModule,
    FormLoginModule
    ],
  declarations: [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
