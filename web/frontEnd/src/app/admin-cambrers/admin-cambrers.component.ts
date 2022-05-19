import { newArray } from '@angular/compiler/src/util';
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
  public taulesmesas: any[] = [];
  public platsbuit: any[] = [];
  public elsmeusEmpleats: any[] = [];
  public empleatsperassignar: any[] = [];
  public empleatstotals: number = 0;
  public platstotals: number = 0;
  public elsmeusEmpleatsPerAsignar: any[] = [];
  public arrayPlatsPerassignar: any[] = [];
  public iterator: number = 0;




  ngOnInit(): void {



    // this.empleatsservice.insertPlat()
    //this.asignaPlat();
    //this.muestraCosas();
    //this.empleatsservice.insertPlat("RgnPj3LfHhbu2nBxNODpKSypMNY2", "-N1NbRxf26fqPKSst0-i")
    // this.automatizadorReparte();
    this.getPlatsRaiz();



  }

  constructor(private serveitaules: TaulaService, private serveiplatos: MandarplatosService, private empleatsservice: EmpleadosService) { }



  getPlatossuscription(taulesmesasub: any) {

    this.taulesmesas = taulesmesasub;
    console.log(this.taulesmesas)

  }



  insertcomandaEstat(keymesa: string, keyplat: string, estat: string) {
    this.serveiplatos.insertcomandaEstat(keymesa, keyplat, estat);


  }



  muestraCosas() {

    // this.asignaPlat();


    this.serveitaules.getTaules().snapshotChanges().subscribe(data => {

      this.taulesmesas = [];

      data.forEach(element => {

        let string = element.key;


        let plats = this.serveitaules.getFillsTaules(string!).snapshotChanges().subscribe(platosget => {

          this.platsbuit = [];

          platosget.forEach(element => {



            let platAmbKey = {
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




          })

          let x = {
            key: element.key,
            plats: this.platsbuit!,
          }
          this.taulesmesas.push(x);





          // this.automatizadorReparte(this.arrayPlatsPerassignar, this.empleatsperassignar)

          this.iterator++;
        }
        );


      });

      this.getPlatossuscription(this.taulesmesas)

    });
  }





  mostraEmpleatsiPlats() {
    this.empleatsservice.getEmpleats().snapshotChanges().subscribe(data => {

      data.forEach(element => {

        let obj = element.payload.val() as Empleat;

        this.empleatsservice.getComandes(element.key!).snapshotChanges().subscribe(plats => {

          let platosempleado: { codiplat: string | null; taula: Plat; }[] = [];
          plats.forEach(plat => {

            let plato = plat.payload.val() as Plat;



            let objplat = {
              codiplat: plat.key,
              taula: plato,


            }


            platosempleado.push(objplat)



          })


          let empleat = {
            key: element.key,
            nom: obj.nom,
            email: obj.email,
            plats: platosempleado,
          }

          this.elsmeusEmpleats.push(empleat)
          this.empleatstotals++;
          this.empleatsservice.insertNumCambrers(this.empleatstotals);
          // this.asignaPlat()

        })

      })


    });

  }

  borraAssignacio(empleat: string, plat: string) {
    this.empleatsservice.deleteComandes(empleat, plat);


  }

  getPlatsSize() {


  }

  asignacioPlatsAuto(numCambrers: number, numPlats: number) {
    let reparticion = numPlats / numCambrers;



  }


  asignaPlat(arrayplats: any[]) {

    this.empleatsservice.getEmpleats().snapshotChanges().subscribe(data => {


      data.forEach(empleat => {


        let objempleat = empleat.payload.val() as Empleat;


        let objempleatmillor = {
          key: empleat.key,
          nom: objempleat.nom,
          email: objempleat.email

        }


        this.empleatsperassignar.push({ empleat: objempleatmillor, comandes: new Array() })

      })
      this.automatizadorReparte(arrayplats, this.empleatsperassignar);



    });

  }


  getPlatsRaiz() {

    this.empleatsservice.getPlatsTemporal().snapshotChanges().subscribe(data => {


      data.forEach(plat => {

        let p = plat.payload.val() as Plat;




        let platbo = {
          key: plat.key,
          comensal: p.comensal,
          nom: p.nom,
          preu: p.preu,
          quantitat: p.quantitat,
          taula: p.taula,
          estat: p.estat


        }


        this.arrayPlatsPerassignar.push(platbo);


      })

      this.asignaPlat(this.arrayPlatsPerassignar);





    })






  }


  automatizadorReparte(platos: any[], camareros: any[]) {
    //let platos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l'];
    // let camareros = [{ empleat: 'camarero1', comandes: new Array() }, { empleat: 'camarero2', comandes: new Array() }, { empleat: 'camarero3', comandes: new Array() }];

    let repartidor = Math.floor(platos.length / camareros.length)

    console.log(repartidor)

    let excedente = platos.length % camareros.length;

    let pertocado = Math.floor(camareros.length / excedente);

    let i = 0;


    console.log(repartidor + " " + excedente)

    camareros.forEach(el => {


      for (let i = 0; i < repartidor; i++) {


        el.comandes.push(platos[0]);
        platos.splice(0, 1);
      }



    })


    camareros.forEach(el => {


      for (let i = 0; i < pertocado; i++) {

        if (platos[0] != null) {

          el.comandes.push(platos[0]);
          platos.splice(0, 1);
        }
        else {
          break;
        }
      }

    })


    camareros.forEach(insert => {

      console.log(insert)

      insert.comandes.forEach((a: any) => {



        this.empleatsservice.insertPlat(insert.empleat.key, a)


      })



    })

  }





}