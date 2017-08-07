import { Component, OnInit } from '@angular/core';
import { User } from '../../data-class/user';

import { AuthService } from '../../services/auth.service' 

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {   
    user: User = {};
    message = "";

    constructor(public authService: AuthService) {}

     ngOnInit(): void {

        this.authService.checkAutorization();      
    }
    
 
    onSubmit() :void {
        // this.submitted = true;
        console.log(this.user);
        this.message = (this.message) ? "Sending..." : ""
        
        this.authService.login(this.user).then(isLoggedAdmin => {

            this.message = "Not Autorizated !";        
        })
    }
}