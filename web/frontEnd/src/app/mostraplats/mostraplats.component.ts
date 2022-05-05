import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plat } from '../model/Plat';
import { MandarplatosService } from '../services/mandarplatos.service';
import { Comensal } from '../interface/Comensal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mostraplats',
  templateUrl: './mostraplats.component.html',
  styleUrls: ['./mostraplats.component.css']
})
export class MostraplatsComponent implements OnInit {

  plats: any;
  selectedplats: any;
  comensal!: string ;
  @Input() keyTaula!:string;
  @Input() comensalList:Comensal[] | undefined;
  @Output() select: EventEmitter<any> = new EventEmitter();
  platsperdemanar: any[] = [];
  platsPerDemanarOrdenat: any[] = [];

  constructor(private httpclient:HttpClient, private mandarplatos:MandarplatosService) {
    


  }

  ngOnInit(): void {

    this.httpclient.get("http://192.168.210.168:8000/get_plats_tipus").subscribe(data => {
      
      data = JSON.stringify(data);
      data = JSON.parse(data.toString());
      this.plats=data;




  }); 
  }


  pedirplat(plato: string, precio: number){


    let plat = new Plat(plato, precio, "Demanat", this.comensal );
    this.platsperdemanar.push(plat);
    this.ordenarPlats();

  }


  ordenarPlats(){
    this.platsPerDemanarOrdenat= this.platsperdemanar.reduce((r, a) => {
      r[a.nom] = [...r[a.nom] || [], a];
      return r;
     }, []);
  }

  lacuenta(){

    this.mandarplatos.init(this.keyTaula);
 

    if(this.platsperdemanar.length==0){
      Swal.fire({
        title: 'Error!',
        text: 'No has demanat cap plat',
        icon: 'error',
        confirmButtonText: 'Ok' 
      })
    }else if(typeof(this.comensal)==undefined|| this.comensal==null || this.comensal==""){
      Swal.fire({
        title: 'Error!',
        text: "No has seleccionat l'usuari que demana",
        icon: 'error',
        confirmButtonText: 'Ok' 
      })
    }else{
      this.platsperdemanar.forEach(plat=>{
        this.mandarplatos.insertcomanda(plat);
        }
      );
    }
  }


  deleteItem(key:string){
  
    for (let index = 0; index < this.platsperdemanar.length; index++) {
      const element = this.platsperdemanar[index];
      if(element.nom == key){
        this.platsperdemanar.splice(index,1)
        this.ordenarPlats();
        return;
      }
    }
  }

  selectComensal(nameComensal:string){

    this.comensal= nameComensal;
    this.select.emit(nameComensal)


    this.platsperdemanar.forEach(element=>{
      element.comensal=this.comensal;
    })

  }


}
