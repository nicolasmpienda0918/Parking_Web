import { Component,  } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  miFormulario: FormGroup = this.fb.group({

    name: ['usuario1', [Validators.required, Validators.minLength(5)]],
    email: ['usuario@prueva.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    
  });

  constructor( private fb:FormBuilder,
               private router: Router,
               private authService: AuthService ) { }


  register() {
   
    const { name, email, password } = this.miFormulario.value;
 
    this.authService.register( name, email, password)
    .subscribe( ok => {
 
      if(ok === true ){
        this.router.navigateByUrl('/dashboard');
      }
      else{
        Swal.fire('Error', ok, 'error')
      }
    });

  }

 

}
