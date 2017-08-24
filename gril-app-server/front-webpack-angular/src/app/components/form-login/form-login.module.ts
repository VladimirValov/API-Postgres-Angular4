import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { FormLoginComponent }     from '../../components/form-login/form-login.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule 
    ],
    declarations: [ FormLoginComponent ],
    exports: [ FormLoginComponent ]
})
export class FormLoginModule {}
