import { Component,  } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router ) { }


  register() {
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard')
    
  }


}
