import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  ListEmpleats: AngularFireList<any> | undefined;

  constructor(private firebase:AngularFireDatabase) {


    
   }

   getEmpleat(empleat: string){
      if(this.firebase.list(`empleats/${empleat}`)!= null){

        return "existe";
      }
      return "no existe";
   }
}
