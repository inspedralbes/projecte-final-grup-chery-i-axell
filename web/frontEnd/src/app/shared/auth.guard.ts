import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { EmpleadosService } from '../services/empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public userService: EmpleadosService, public router:Router){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    

      let user:any = JSON.parse(localStorage.getItem("user")!);
    
      return  this.userService.getEmpleat(user!.uid).snapshotChanges().subscribe(res=>{
        console.log(res.key)
        if(res.key==null){
          this.router.navigate(['/login']);
          console.log("NO existe")
          return false
        }else{
          return true
        }
       
      });


      



  }
  
}
