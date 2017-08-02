import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard }            from './services/auth-guard.service';
import { AuthService }  from './services/auth.service';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { FormLoginComponent }   from './components/form-login/form-login.component';

const routes: Routes = [
    { path: '', redirectTo: '/autorization', pathMatch: 'full' },
    { path: 'autorization',     component: FormLoginComponent },
    { path: 'dashboard',        component: DashboardComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ AuthGuard, AuthService ]
})

export class AppRoutingModule {}