import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { object } from '@angular/fire/database';
import { Plat } from '../model/Plat';
import { Taula } from '../model/Taula';
import { TaulaService } from '../services/taula.service';


@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {

  taulesmesas:  any[] = [];
  platsbuit: any[] = [];

  constructor(private serveitaules:TaulaService) { }

  ngOnInit(): void {

    this.serveitaules.getTaules().snapshotChanges().subscribe(data => {

      this.taulesmesas=[];
      data.forEach(element=>{

        let string = element.key;

        let plats = this.serveitaules.getFillsTaules(string!).snapshotChanges().subscribe(platosget=>{
      
         this.platsbuit = [];

          platosget.forEach(element=>{

            this.platsbuit.push(element.payload.val())


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
  console.log(this.taulesmesas)
  
}


}

