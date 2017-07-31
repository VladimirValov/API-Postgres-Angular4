import { Component } from '@angular/core';

import { User } from '../../data-class/user';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html'
})

export class FormLoginComponent {
    submitted = false;

    model = new User("admin", "password", false);

    onSubmit() {
        this.submitted = true;
    }


}