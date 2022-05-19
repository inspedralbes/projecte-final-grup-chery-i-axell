import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Plat } from '../model/Plat';
import { EmpleadosService } from '../services/empleados.service';
import { MandarplatosService } from '../services/mandarplatos.service';
import { TaulaService } from '../services/taula.service';

@Component({
  selector: 'app-cambrer-component',
  templateUrl: './cambrer-component.component.html',
  styleUrls: ['./cambrer-component.component.css']
})
export class CambrerComponentComponent implements OnInit {

  public idCambrer: string | undefined;
  public arrayOrdres: any[] = [] ;
  public arrayOrdresTraducida: any[] = [] ;

  constructor(private servicioplatos: MandarplatosService, private route:ActivatedRoute, private serviciomesa: TaulaService, private servicioempleados: EmpleadosService) { }

  ngOnInit(): void {


    this.idCambrer =  this.route.snapshot.paramMap.get("idcambrer")!;
    this.servicioempleados.getComandes(this.idCambrer);
    this.repOrdres();



  }

  repOrdres(){

    this.servicioempleados.getComandes(this.idCambrer!).snapshotChanges().subscribe(data => {

  
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

  submitOrdres(codiplat: string, coditaula: string){
    this.servicioplatos.insertcomandaEstat(coditaula, codiplat, "Entregat");

  }

  traduceNumeros(){

   
    this.arrayOrdres.forEach(element=>{
      this.servicioplatos.getNomPlatsiTaules( element.mesataula, element.keyplat).snapshotChanges().
      subscribe(data=>{

        let objeto = data.payload.val() as Plat;
        

        element.nomplat = objeto.nom;
        element.estat = objeto.estat;



      })



    });

    console.log(this.arrayOrdres+ " estoy aqui..?")





  }




}
