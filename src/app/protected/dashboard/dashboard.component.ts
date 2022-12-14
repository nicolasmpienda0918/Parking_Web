import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [

    `.container{
      margin: 10px;
    }
    `



    
  ]
})
export class DashboardComponent {

  get usuario() {

   return this.authService.usuario

  }

  constructor( private routter: Router,
               private authService: AuthService) { }


  logouth(){
   
    this.routter.navigateByUrl('/auth');
    this.authService.logout();

  }

}
