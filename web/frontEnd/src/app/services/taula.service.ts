import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
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


   getComensals(){
     return this.comensalList= this.firebase.list(`taules/${this.key}/comensals`);
   }

   insertComensal(comensal:Comensal){
      this.comensalList?.push({name:comensal.name})
   }

   newTaula(codiTaula:string){
     this.setKey(codiTaula)
    this.firebase.object(`taules/${this.key}`).set({codiTaula:codiTaula})
    
   }



}
