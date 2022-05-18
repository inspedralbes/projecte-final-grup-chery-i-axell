import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { getDatabase, ref, child, get } from "firebase/database";
import { Comensal } from '../interface/Comensal';
import { observable } from 'rxjs';
import {take} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class TaulaService {
  

  comensalList: AngularFireList<any> | undefined;
  key:string | undefined;


  constructor(private firebase:AngularFireDatabase) {
   }


   setKey(key:string){
     this.key=key;
   }


   getTaules(){
    return this.comensalList= this.firebase.list(`taules/`);

   }

   getFillsTaules(key:string){

    return this.comensalList= this.firebase.list(`taules/${key}/plats`);

   }

   getComensals(key:string){
     return this.comensalList= this.firebase.list(`taules/${key}/comensals`);
   }

   insertComensal(comensal:Comensal){
      this.comensalList?.push({name:comensal.name, image: comensal.image, ready:false})
   }


   confirmarCompraComensal(taula:string, key:string){
    let comensal= this.firebase.object(`taules/${taula}/comensals/${key}`);
    comensal.update({ready:true});
   }

   unConfirmCompraComensal(taula: any, key: any) {
    let comensal= this.firebase.object(`taules/${taula}/comensals/${key}`);
    comensal.update({ready:false});
  }



  deleteComensal(key:string){
    this.comensalList?.remove(key);
  }

  deletePlatsTemporalComensal(taula:string, comensal:string){
    let platsComensalTemp = this.firebase.list(`taules/${taula}/platsTemporal/${comensal}`);
    platsComensalTemp.remove();
  }


  enviarComanda(keyTaula:string){
    let platsTemporals = this.firebase.object(`taules/${keyTaula}/platsTemporal/`);

    let plats = platsTemporals.valueChanges().pipe(take(1));
    plats.forEach(item=>{
      console.log(item)
    })

 
  }





  getPlatsDeTaula(key:string){
    return this.comensalList=this.firebase.list(`taules/${key}/plats`);
  }




   newTaula(codiTaula:string){

    const dbRef = ref(getDatabase());
    get(child(dbRef, `taules/${codiTaula}`)).then((snapshot) => {
      if (snapshot.exists()) {
    
        this.setKey(codiTaula)
      } else {
      
        this.setKey(codiTaula)
        this.firebase.object(`taules/${this.key}`).set({codiTaula:codiTaula})
      }
    }).catch((error) => {
     
    });
   }


}
