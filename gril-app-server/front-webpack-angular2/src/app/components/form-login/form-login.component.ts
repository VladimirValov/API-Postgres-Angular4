import { Component, OnInit } from '@angular/core';
import { User } from '../../data-class/user';
// import { UserService } from '../../services/user.service' 
import { AuthService } from '../../services/auth.service' 


import { Router } from '@angular/router';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {   
    user: User = {};
    message = "";

    constructor(public authService: AuthService, public router: Router) {}

     ngOnInit(): void {

        // console.log("FormLoginComponent"); 
        // console.log("local-User ", localStorage.getItem('user'));
        // console.log("local-User ", this.authService.localUser);
        // console.log('local-token', this.authService.token);
        // console.log('local-isAdmin', this.authService.isLoggedAdmin);

         if (this.authService.isLoggedAdmin) this.router.navigateByUrl('/dashboard');    
    }
 
    onSubmit() :void {
        // this.submitted = true;
        console.log(this.user);
        this.message = (this.message) ? "Sending..." : ""
        
        this.authService.login(this.user).then(isLoggedAdmin => {

            console.log(isLoggedAdmin);

            if (isLoggedAdmin) {
                this.message = "";
                this.router.navigateByUrl('/dashboard');
            }    
            else this.message = "Not Autorizated !";
        
        })
    }


}