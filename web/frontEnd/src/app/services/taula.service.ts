import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { getDatabase, ref, child, get } from "firebase/database";
import { Comensal } from '../interface/Comensal';

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



   getComensals(key:string){
     return this.comensalList= this.firebase.list(`taules/${key}/comensals`);
   }

   insertComensal(comensal:Comensal){
      this.comensalList?.push({name:comensal.name, image: comensal.image})
   }


  deleteComensal(key:string){
    this.comensalList?.remove(key);
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
