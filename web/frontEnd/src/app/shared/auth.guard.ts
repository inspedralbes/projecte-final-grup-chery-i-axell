import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
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
    
      console

     if(this.authService.isLoggedIn()!==true){
      this.router.navigate(['/login'])
     }
     return true


      



  }
  
}
