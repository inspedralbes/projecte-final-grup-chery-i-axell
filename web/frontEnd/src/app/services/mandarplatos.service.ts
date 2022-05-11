import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get } from "firebase/database";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { Plat } from '../model/Plat';
 




@Injectable({
  providedIn: 'root'
})
export class MandarplatosService {

  comandaList: AngularFireList<any> | undefined;

  constructor(private firebase:AngularFireDatabase) { 
  }

  init(key: string){
    this.comandaList= this.firebase.list(`taules/${key}/plats`);

  }

  getComanda(key:string){
    return this.comandaList= this.firebase.list(`taules/${key}/plats`);
  }


  insertcomandaEstat(keyMesa:string, keyPlat: string, estat: string){

    let itemRef = this.firebase.object(`taules/${keyMesa}/plats/${keyPlat}/`);

    itemRef.update({estat: estat});


  }

  getNomPlatsiTaules(keyMesa:string, keyPlat: string){
    return  this.firebase.object(`taules/${keyMesa}/plats/${keyPlat}/`);
  }






  insertcomanda(plat: Plat){

    this.comandaList?.push({nom:plat.nom, preu: plat.preu, estat: plat.estat })


  }

  insertNumPlats(numplats: number){

    let itemRef = this.firebase.object(`valors/`);

    itemRef.update({numplats: numplats});
  

  }



}
