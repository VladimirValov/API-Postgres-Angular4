import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { FormLoginComponent }   from './components/form-login/form-login.component';

const routes: Routes = [
    { path: '', redirectTo: '/autorization', pathMatch: 'full' },
    { path: 'autorization',     component: FormLoginComponent },
    { path: 'dashboard',        component: DashboardComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}