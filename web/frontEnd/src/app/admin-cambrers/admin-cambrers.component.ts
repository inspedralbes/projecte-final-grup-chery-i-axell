import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/compat/database';
import { elementAt } from 'rxjs';
import { Empleat } from '../model/Empleat';
import { Plat } from '../model/Plat';
import { TaulaPlat } from '../model/TaulaPlat';
import { EmpleadosService } from '../services/empleados.service';
import { MandarplatosService } from '../services/mandarplatos.service';
import { TaulaService } from '../services/taula.service';

@Component({
  selector: 'app-admin-cambrers',
  templateUrl: './admin-cambrers.component.html',
  styleUrls: ['./admin-cambrers.component.css']
})
export class AdminCambrersComponent implements OnInit {
  public taulesmesas:  any[] = [];
  public platsbuit: any[] = [];
  public elsmeusEmpleats: any[] = [] ;
  public empleatsperassignar: any[] = [];
  public empleatstotals: number = 0;
  public platstotals: number = 0;
  public elsmeusEmpleatsPerAsignar: any[] = [] ;
  public arrayPlatsPerassignar: any[] = [];




  ngOnInit(): void {

    this.automatizadorReparte()

    // this.empleatsservice.insertPlat()
    //this.asignaPlat();
    //this.muestraCosas();
    //this.empleatsservice.insertPlat("RgnPj3LfHhbu2nBxNODpKSypMNY2", "-N1NbRxf26fqPKSst0-i")

    

  }

  constructor(private serveitaules:TaulaService, private serveiplatos: MandarplatosService, private empleatsservice: EmpleadosService) { }



getPlatossuscription(taulesmesasub: any){

  this.taulesmesas = taulesmesasub;
  console.log(this.taulesmesas)
  
}



insertcomandaEstat(keymesa: string, keyplat:string, estat:string){
  this.serveiplatos.insertcomandaEstat(keymesa, keyplat, estat);


}



muestraCosas(){

  this.asignaPlat();
  
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
          this.arrayPlatsPerassignar.push(platAmbKey);
          this.platstotals++;
          this.serveiplatos.insertNumPlats(this.platstotals)
          console.log(this.empleatsperassignar)

          console.log(this.arrayPlatsPerassignar)


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





  mostraEmpleatsiPlats(){
    this.empleatsservice.getEmpleats().snapshotChanges().subscribe(data =>{
  
        data.forEach(element=>{

        let obj= element.payload.val() as Empleat;

        this.empleatsservice.getComandes(element.key!).snapshotChanges().subscribe(plats =>{

          let platosempleado: { codiplat: string | null; taula: Plat; }[] = [];
          plats.forEach(plat =>{

            let plato = plat.payload.val() as Plat;
            


            let objplat = {
              codiplat: plat.key,
              taula: plato,


            }

            console.log(objplat)

            platosempleado.push(objplat)



          })

          
        let empleat ={
          key: element.key,
          nom: obj.nom,
          email: obj.email,
          plats: platosempleado,
        }

        this.elsmeusEmpleats.push(empleat)
        this.empleatstotals++;
        this.empleatsservice.insertNumCambrers(this.empleatstotals);
        this.asignaPlat()



        })





        
      })


    });

  }

  borraAssignacio(empleat: string , plat: string){
this.empleatsservice.deleteComandes(empleat, plat);


  }

  getPlatsSize(){

    console.log(this.platstotals)

  }

  asignacioPlatsAuto(numCambrers: number, numPlats: number){
    let reparticion = numPlats/numCambrers;



  }


  asignaPlat(){

      this.empleatsservice.getEmpleats().snapshotChanges().subscribe(data =>{


        data.forEach(empleat=>{

          let objempleat=  empleat.payload.val() as Empleat;

          this.empleatsperassignar.push(objempleat)


          


        })



      });

  }

  automatizadorReparte(){
    let arrayArepartir = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let arrayRecibidor = [{ nom :'camarero1', encarregs: new Array() }, { nom :'camarero2', encarregs: new Array()}, { nom :'camarero3', encarregs: new Array()}];

let j = 0;
    arrayRecibidor.forEach(el =>{

      console.log(arrayArepartir + " reparte")
      let i = 0;

 
      arrayArepartir.forEach(pedido =>{



        
        if(i>= 3){

         arrayArepartir.splice(0,3);
         i=0;
         return;

        }
        else{

          el.encarregs.push(pedido)

        }
        i++;
      })
      j++;
    })

    console.log(arrayRecibidor)

  }





}