import { Injectable } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public usuarisServices:EmpleadosService) { }


   isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log("user:" +user)
    return user !== null ? true : false;
  }


}
