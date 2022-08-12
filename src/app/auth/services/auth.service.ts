import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';




import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../pages/interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basUrl: string = environment.baseUrl;
  private _usuario!: Usuario;


get usuario() {
    return { ...this._usuario };

}
  constructor( private  http: HttpClient ) { }



  register( name: string, email:string, password: string) {

    const url = `${ this.basUrl}/auth/new`;
  const body = { name, email, password};

 return  this.http.post<AuthResponse>( url,body )
 .pipe(
  tap(resp => {
   if(resp.ok){
    localStorage.setItem( 'token', resp.token! );
   this._usuario = {
    name: resp.name!,
    uid: resp.uid!
   }
   }   
  }),
   map(resp => resp.ok),
   catchError(err => of(err.error.msg) )
 )
  }



login( email: string,  password: string){

  const url = `${ this.basUrl}/auth`;
  const body = { email, password};

 return  this.http.post<AuthResponse>( url,body )

 .pipe(
  tap(resp => {
   if(resp.ok){
    localStorage.setItem( 'token', resp.token! );
   this._usuario = {
    name: resp.name!,
    uid: resp.uid!
   }

   }
   
  }),

   map(resp => resp.ok),
   catchError(err => of(err.error.msg) )

 )

}


validarToken() {

 const url =  `${ this.basUrl}/auth/renew`;
 const headers = new HttpHeaders()
 .set('x-token', localStorage.getItem('token') || '' );

 return this.http.get<AuthResponse>(url,{headers})
 .pipe( 
  map( resp => {
    
    localStorage.setItem( 'token', resp.token! );
    this._usuario = {
     name: resp.name!,
     uid: resp.uid!
    }
    return resp.ok;
  }),

   catchError( err => of(false))
 
 );

}


logout(){

  localStorage.clear();
  //localStorage.removeItem('token');

}




}