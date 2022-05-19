import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-afegir-plats',
  templateUrl: './afegir-plats.component.html',
  styleUrls: ['./afegir-plats.component.css']
})
export class AfegirPlatsComponent implements OnInit {


  plats: any;
  tipusdeplats: any;
  nomplat: any;
  tipusplat: any;
  preuplat: any;
  selectedtipus: any;


  constructor(private httpclient:HttpClient) {
    


   }

  ngOnInit() {
   this.httpclient.get("http://192.168.210.168:8000/get_plats").subscribe(data => {
      console.log(data);
      
      data = JSON.stringify(data);
      this.plats=data;
      this.mostraTipus()


  }); 
}


  mostraTipus(){
    console.log(this.plats)
    this.httpclient.get("http://192.168.210.168:8000/get_tipus").subscribe(data => {
      console.log(data);
      
      data = JSON.stringify(data);
      let json = JSON.parse(data.toString());
      console.log(json)
      this.tipusdeplats=json;


  })




  }


  afegirplat(){
    console.log(this.nomplat, this.selectedtipus, this.preuplat);

    this.httpclient.post("http://192.168.210.168:8000/add_plat",
    {
    "nom":  this.nomplat ,
    "preu":  this.preuplat ,
    "tipusnom":   this.selectedtipus  
    },)
    .subscribe(
    data => {
    console.log("POST Request is successful ", data);
    },
    error => {
    console.log("Error", error);
    }
    );


  }


}
