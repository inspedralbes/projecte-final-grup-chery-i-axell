import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { Router, RouterLink } from '@angular/router';
import { Comensal } from '../interface/Comensal';
import { Plat } from '../model/Plat';
import { TaulaService } from './taula.service';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  ListEmpleats: AngularFireList<any> | undefined;


  constructor(private firebase:AngularFireDatabase, private router: Router, private serviciomesas: TaulaService) {


    
   }


   init(){
     this.ListEmpleats= this.firebase.list(`empleats/`);
 
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

getEmpleats(){

  return this.firebase.list(`empleats/`);
}



getPlatsTemporal(){

  return this.firebase.list(`plats/`);



}

deleteComandes(empleat: string, plat: string){


  return this.firebase.object(`comandes/${empleat}/plats/${plat}`).remove();

 }

 insertPlat(empleat: string, plat: any| undefined){

  console.log(plat.estat)

  let llistaplatsempleat = this.firebase.object(`comandes/${empleat}/plats/${plat.key}`).set(
    {comensal: plat.comensal,
      
      preu: plat.preu,
      taula: plat.taula,
      nom: plat.nom,
      quantitat: plat.quantitat,
      estat: plat.estat
    }



  );



  return llistaplatsempleat;
 }



 insertTemporal(codiplat: string){
  let temporal = this.firebase.object(`platsTemporal/${codiplat}`);

  return temporal;


 }

 insertNumCambrers(numcambrer: number){

  let itemRef = this.firebase.object(`valors/`);

  itemRef.update({numcambrers: numcambrer});


 }


 returnValors(){

  return this.firebase.list(`valors/`);

 }

 limpiar(empleat: string){

  return this.firebase.object(`comandes/${empleat}/plats/`).remove();

 }








}
