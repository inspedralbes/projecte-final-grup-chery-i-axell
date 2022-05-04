import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plat } from '../model/Plat';
import { MandarplatosService } from '../services/mandarplatos.service';


@Component({
  selector: 'app-mostraplats',
  templateUrl: './mostraplats.component.html',
  styleUrls: ['./mostraplats.component.css']
})
export class MostraplatsComponent implements OnInit {

  plats: any;
  selectedplats: any;
  platsperdemanar: any[] = [];
 

  constructor(private httpclient:HttpClient, private mandarplatos:MandarplatosService) {
    


  }

  ngOnInit(): void {

    this.httpclient.get("http://192.168.210.168:8000/get_plats_tipus").subscribe(data => {
      
      data = JSON.stringify(data);
      data = JSON.parse(data.toString());
      this.plats=data;




  }); 
  }


  pedirplat(plato: string, precio: string){



    let plat = {  nom: plato, preu: precio, estat: "Demanat"};
    this.platsperdemanar.push(plat);




  }

  lacuenta(){

    this.mandarplatos.init("dsad");
    this.platsperdemanar.forEach(element=>{
      let plat = new Plat(element.nom, element.preu, element.estat, "axell");
      this.mandarplatos.insertcomanda(plat);


      }
    );



    



  }


}
