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
  @Input() comensal!: string ;
  @Input() keyTaula!:string;
 
  @Output() select: EventEmitter<any> = new EventEmitter();
  platsperdemanar: any[] = [];
  platsPerDemanarOrdenat: any[] = [];
  platsTemporalTaula:any[]=[];
  platsTemporalComensal:any=[];

  constructor(private httpclient:HttpClient, private mandarplatos:MandarplatosService) {
    


  }

  ngOnInit(): void {

/*     this.httpclient.get("http://192.168.210.168:8000/get_plats_tipus").subscribe(data => {
      
      data = JSON.stringify(data);
      data = JSON.parse(data.toString());
      this.plats=data;
    




  });  */

  this.mandarplatos.init(this.keyTaula);

  this.comensal= localStorage.getItem("comensal")!;

  this.plats=[
    {nomTipus:"Primeros", llistatPlats:[
                          {nom:"Spaguetis", preu:6},
                          {nom:"Macarrons", preu:3},
                          {nom:"No sé", preu:6},
                          ]},
  {nomTipus:"Segundos", llistatPlats:[
                            {nom:"ASDF", preu:6},
                            {nom:"gdfh", preu:3},
                            {nom:"NasdAS", preu:6},
                            ]},
  ];



  this.mandarplatos.getComandesTemporals(this.keyTaula).snapshotChanges().subscribe(item=>{
    this.platsTemporalTaula=[];
     item.forEach(element=>{

      

       if(element.key==this.comensal){
         this.platsTemporalComensal=element.payload.val();
       }
       this.platsTemporalTaula.push({plats:element.payload.val(), comensal:element.key})

       

     })



  });








  }


  pedirPlat(plato: string, precio: number){

    let plat = new Plat(plato, precio, "Demanat", localStorage.getItem("comensal")! );
    let platTmp = {...plat, quantitat:1}
    this.platsperdemanar.push(plat);
    this.ordenarPlats();


    if(this.platsTemporalComensal.length!=0){
      let noIntroduit= true;
      this.platsTemporalComensal.forEach((element: { nom: string, quantitat:number; }) => {
        if(element.nom ==platTmp.nom ){
          element.quantitat++;
          noIntroduit=false;
        }
      });
      if(noIntroduit){
        this.platsTemporalComensal.push(platTmp)
      }
    }else{
      this.platsTemporalComensal.push(platTmp)
    }
  

    this.mandarplatos.inserComandaTemporal(this.platsTemporalComensal, this.comensal);




  }


  ordenarPlats(){
    this.platsPerDemanarOrdenat= this.platsperdemanar.reduce((r, a) => {
      r[a.nom] = [...r[a.nom] || [], a];
      return r;
     }, []);
  }

  

  lacuenta(){

    
 

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



  addItem(plat: any){

     if(this.platsTemporalComensal.length!=0){
      let noIntroduit= true;
      this.platsTemporalComensal.forEach((element: { nom: string, quantitat:number; }) => {
        if(element.nom ==plat.nom ){
          element.quantitat++;
          noIntroduit=false;
        }
      });
      if(noIntroduit){
        plat.quantitat=1;
        this.platsTemporalComensal.push(plat)
      }
    }else{
      plat.quantitat=1;
      this.platsTemporalComensal.push(plat)
    } 


  this.mandarplatos.inserComandaTemporal(this.platsTemporalComensal, this.comensal);


  }


  deleteItem(key:string){
  
      console.log(key)

    if(this.platsTemporalComensal.length!=0){
     
       this.platsTemporalComensal.forEach((element: { nom: string, quantitat:number; }, index: any) => {
        if(element.nom ==key && element.quantitat>0){
          element.quantitat--;
          if(element.quantitat==0){
            this.platsTemporalComensal.splice(index,1);
          }
        }
      }); 
    }
   

    this.mandarplatos.inserComandaTemporal(this.platsTemporalComensal, this.comensal);
    
  }

  selectComensal(nameComensal:string){

    this.comensal= nameComensal;
    this.select.emit(nameComensal)


    this.platsperdemanar.forEach(element=>{
      element.comensal=this.comensal;
    })

  }


}
