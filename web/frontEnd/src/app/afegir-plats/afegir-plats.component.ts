import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PlatsTipusService } from '../services/plats-tipus.service';



@Component({
  selector: 'app-afegir-plats',
  templateUrl: './afegir-plats.component.html',
  styleUrls: ['./afegir-plats.component.css']
})
export class AfegirPlatsComponent implements OnInit {


  plats: any[]=[];
  tipusdeplats: any;
  nomplat: any;
  tipusplat: any;
  preuplat: any;
  selectedtipus: any;
  categoria: any;
  selectedtipusBorrar: any;


  constructor(private platTipusService:PlatsTipusService) {
   }

  ngOnInit() {


    this.getPlats()

  
  this.platTipusService.getTipus().subscribe(res=>{
   this.tipusdeplats=res;
  })



}
  getPlats() {
    
  this.platTipusService.getPlatsTipus().subscribe((item:any)=>{
    this.plats=[];
    this.plats=item ;
   
  })

}





  eliminarPlat(nomPlat:string){
    console.log("deleting "+ nomPlat)
    this.platTipusService.deletePlat(nomPlat).subscribe(item=>{
      this.getPlats();
    });
  }



  afegirPlat(){
    let preu = parseInt(this.preuplat);
    this.platTipusService.postPlat({"nom":this.nomplat, "preu": preu, "tipusnom":this.selectedtipus}).subscribe((res:any)=>{
      (res.status=="bien!")?this.onSuccess():this.onError();
    },err => { 
      this.onError()
    })




  }
  onError() {
    Swal.fire({
      title: 'Error',
      text: "Algo ha sortit malament",
      icon: 'error',
      confirmButtonText: 'Ok' 
    })
  }
  onSuccess() {
    Swal.fire({
      title: 'OK!',
      text: "S'ha confirmat la petició",
      icon: 'success',
      confirmButtonText: 'Ok' 
    })
    this.resetForm();
    this.getPlats();
  }

  resetForm() {
    this.nomplat=""
    this.preuplat=""

  }

  afegirCategoria(categoria :any){
   this.platTipusService.addCategoria(categoria)
  }

  eliminarCategoria(categoria :any){  
  this.platTipusService.deleteCategoria(categoria);
  }

}
