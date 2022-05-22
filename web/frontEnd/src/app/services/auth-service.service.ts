import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmpleadosService } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public usuarisServices:EmpleadosService, public auth: AngularFireAuth) { }




   isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log("user:" +user)
    return user !== null ? true : false;
  }


  logOut(){
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }




}
