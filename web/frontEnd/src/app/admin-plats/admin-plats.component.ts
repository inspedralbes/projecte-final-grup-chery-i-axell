import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { Plat } from '../model/Plat';
import { Taula } from '../model/Taula';
import { TaulaService } from '../services/taula.service';
import { MandarplatosService } from '../services/mandarplatos.service';


@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {

  taulesmesas:  any[] = [];
  platsbuit: any[] = [];

  constructor(private serveitaules:TaulaService, private serveiplatos: MandarplatosService) { 

  

  }

  ngOnInit(): void {
    this.muestraCosas();

    
    this.serveitaules.getTaules().snapshotChanges().subscribe(data => {

      
      this.taulesmesas=[];
      data.forEach(element=>{

        let string = element.key;

        let plats = this.serveitaules.getFillsTaules(string!).snapshotChanges().subscribe(platosget=>{
      
         this.platsbuit = [];

          platosget.forEach(element=>{

            let platAmbKey ={
              key: element.key,  
              nom: element.payload.val().nom,
              preu: element.payload.val().preu,
              comensal: element.payload.val().comensal,
              estat: element.payload.val().estat,

                }

            this.platsbuit.push(platAmbKey)


          })
          let x ={
            key: element.key,  
            plats: this.platsbuit!,
              }
              this.taulesmesas.push(x);
          }
        );

  });
  this.getPlatossuscription(this.taulesmesas)
});

}

getPlatossuscription(taulesmesasub: any){

  this.taulesmesas = taulesmesasub;

  
}

track(index:number, plat:any):string{
  return plat.key!;
}
track2(index:number, taula:any):string{
  return taula.key!;
}


insertcomandaEstat(keymesa: string, keyplat:string, estat:string){
  this.serveiplatos.insertcomandaEstat(keymesa, keyplat, estat);
}



muestraCosas(){
  
  this.serveitaules.getTaules().snapshotChanges().subscribe(data => {

    this.taulesmesas=[];
    data.forEach(element=>{

      let string = element.key;

      let plats = this.serveitaules.getFillsTaules(string!).snapshotChanges().subscribe(platosget=>{
    
       this.platsbuit = [];

        platosget.forEach(element=>{

          let platAmbKey ={
            key: element.key,  
            nom: element.payload.val().nom,
            preu: element.payload.val().preu,
            comensal: element.payload.val().comensal,
            estat: element.payload.val().estat,

              }

          this.platsbuit.push(platAmbKey)


        })
        let x ={
          key: element.key,  
          plats: this.platsbuit!,
            }
            this.taulesmesas.push(x);




        }
      );

});
this.getPlatossuscription(this.taulesmesas)
});
}


}

