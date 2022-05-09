import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { Router, RouterLink } from '@angular/router';
import { TaulaService } from './taula.service';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  ListEmpleats: AngularFireList<any> | undefined;


  constructor(private firebase:AngularFireDatabase, private router: Router, private serviciomesas: TaulaService) {


    
   }


   getComandes(empleat: string){

    return this.firebase.list(`comandes/${empleat}/plats`);

   }

   getEmpleat(empleat: string)  {

    let alert = this.firebase.object(`empleats/${empleat}`).snapshotChanges().subscribe(data =>{


      if(data.key == null){
        this.router.navigate(['/login']);

      
      }
      else{
    
        this.router.navigate(['/cambrers', data.key]);



      }

    });



   }
}
