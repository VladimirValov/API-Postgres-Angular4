import { Component } from '@angular/core';
import { User } from '../../data-class/user';
import { UserService } from '../../services/user.service' 

import { Router } from '@angular/router';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css'],
    providers:[ UserService ]
})

export class FormLoginComponent {
    // submitted = false;
    // user = new User("admin", "password", false, "");
    user: User = {};

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    onSubmit() :void {
        // this.submitted = true;
        console.log(this.user);
        
        this.userService.Authorize(this.user).then(response => {

            const { token } = response; 
            console.log(token);

             localStorage.setItem('token', token);

             console.log('local', localStorage.getItem('token'));
             
             if (token) this.router.navigateByUrl('/dashboard');
        
        })
    }


}