import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleat } from '../model/Empleat';
import { Plat } from '../model/Plat';
import { EmpleadosService } from '../services/empleados.service';
import { MandarplatosService } from '../services/mandarplatos.service';
import { TaulaService } from '../services/taula.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cambrer-component',
  templateUrl: './cambrer-component.component.html',
  styleUrls: ['./cambrer-component.component.css']
})
export class CambrerComponentComponent implements OnInit {

  public idCambrer: string | undefined;
  public nomCambrer: string | undefined;
  public arrayOrdres: any[] = [] ;
  public arrayOrdresTraducida: any[] = [] ;

  constructor(private servicioplatos: MandarplatosService, private route:ActivatedRoute, private serviciomesa: TaulaService, private servicioempleados: EmpleadosService, private _location: Location) { }
  
  volver(){
    this._location.back();
  }

  ngOnInit(): void {


    this.idCambrer =  this.route.snapshot.paramMap.get("idcambrer")!;
    this.servicioempleados.getComandes(this.idCambrer);
    this.servicioempleados.getCambrer(this.idCambrer).snapshotChanges().subscribe(data =>{
    
      let empleat = data.payload.val() as Empleat;

      this.nomCambrer = empleat.nom;
      this.repOrdres();

    


  })
  }

  repOrdres(){

    this.servicioempleados.getComandes(this.idCambrer!).snapshotChanges().subscribe(data => {

  
      this.arrayOrdres = [];
      data.forEach(element=>{

        let ordre = {
            keyplat: element.key,
            mesataula: element.payload.val(),
            nomplat: "",
            estat: "",


        }

        this.arrayOrdres.push(ordre);


      })

      this.getSubs(this.arrayOrdres);
      this.traduceNumeros();


});




  }

  getSubs(arrayOrdres: any){
    this.arrayOrdres = arrayOrdres;



  }

  submitOrdres(codiplat: string, coditaula: string, idcambrer: string | undefined){
  //  this.servicioplatos.insertcomandaEstat(coditaula, codiplat, "Entregat");
    this.servicioempleados.removecomandes(idcambrer!, codiplat);

  }

  traduceNumeros(){

   
    this.arrayOrdres.forEach(element=>{


      this.servicioplatos.getNomPlatsiTaules( element.mesataula.nom, element.keyplat).snapshotChanges().
      subscribe(data=>{

        let obj = data.payload.val() as Plat;

        

        // element.nomplat = objeto.nom;
        // element.estat = objeto.estat;



      })



    });






  }




}
