import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

miFormulario: FormGroup = this.fb.group({

  email: ['user01@gmail.com', [Validators.required, Validators.email]],
  password: ['user123', [Validators.required, Validators.minLength(6)]],
  
});

  constructor( private fb: FormBuilder,
              private router:Router,
              private authService: AuthService )  { }

  

  login() {
    console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;
 
    this.authService.login( email, password)
    .subscribe( ok => {
   console.log(ok);
      if(ok === true ){
        this.router.navigateByUrl('/dashboard');

      }
      else{
        //Mensaje de Error
      }
    });

  }
};
