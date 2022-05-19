import { Injectable } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public usuarisServices:EmpleadosService) { }


  isAdmin(id:string){
    this.usuarisServices.getEmpleat(id);
  }


}
