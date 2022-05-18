import { Component, Input, OnInit } from '@angular/core';
import { TaulaService } from 'src/app/services/taula.service';

@Component({
  selector: 'app-tiquet',
  templateUrl: './tiquet.component.html',
  styleUrls: ['./tiquet.component.css']
})
export class TiquetComponent implements OnInit {


  @Input() codiTaula!:string;
  plats!:any[];
  platsTmp!:any[];
  platsOrdenatsPerComensal!:any;
  totalTaula:number=0;
  constructor(public taulaService:TaulaService) {
   }

  ngOnInit(): void {
   
    this.taulaService.getPlatsDeTaula(this.codiTaula).snapshotChanges().subscribe(item=>{
      this.plats=[];
      this.platsOrdenatsPerComensal = [];

      item.forEach(element=>{
        
        let x ={
          key: element.key,
          nom: element.payload.val().nom,
          estat: element.payload.val().estat,
          comensal: element.payload.val().comensal,
          preu: element.payload.val().preu,
        }
        this.plats?.push(x);
        

      })




      this.platsTmp= this.plats.reduce((r, a) => {
        r[a.comensal] = [...r[a.comensal] || [], a];
        return r;
       }, []);

       
       for (const key in this.platsTmp) {
         if (Object.prototype.hasOwnProperty.call(this.platsTmp, key)) {
           const element = this.platsTmp[key];
           let total = 0;

           element.forEach((item: { preu: number; })=>{
             total+=item.preu;
           })
           

           this.platsOrdenatsPerComensal.push({comensal:key, plats: [...element], total:total})
         }
       }
      

       this.platsOrdenatsPerComensal.forEach((item: { total: number; })=>{
         this.totalTaula+=item.total;
       })

       



    })
  }

}
