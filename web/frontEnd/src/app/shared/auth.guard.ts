import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

import { EmpleadosService } from '../services/empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public authService:AuthServiceService, public router:Router){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    

     if(this.authService.isLoggedIn()!==true){
      Swal.fire({
        title: 'Error!',
        text: 'No tens accès a aquesta pàgina',
        icon: 'error',
        confirmButtonText: 'Ok' 
      })
      this.router.navigate(['/login'])
     }
     return true


      



  }
  
}
