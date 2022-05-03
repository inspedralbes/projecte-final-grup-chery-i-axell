import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mostraplats',
  templateUrl: './mostraplats.component.html',
  styleUrls: ['./mostraplats.component.css']
})
export class MostraplatsComponent implements OnInit {

  plats: any;
  selectedplats: any;
  platsperdemanar: any[] = [];
 

  constructor(private httpclient:HttpClient) {
    


  }

  ngOnInit(): void {

    this.httpclient.get("http://127.0.0.1:8000/get_plats_tipus").subscribe(data => {
      
      data = JSON.stringify(data);
      data = JSON.parse(data.toString());
      this.plats=data;


      console.log(this.plats);


  }); 
  }


  pedirplat(plato: string, precio: string){



    let plat = {  plato: plato, precio: precio};
    this.platsperdemanar.push(plat);

    console.log(this.platsperdemanar)


  }

  lacuenta(){

    let platos = JSON.stringify(this.platsperdemanar);
    console.log(platos);



  }


}
