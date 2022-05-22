import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  selectedPlat:string="";
  nouNom:string="";
  preuSelectedPlat:string="";


  constructor(private platTipusService:PlatsTipusService, private _location: Location) {
   }

  ngOnInit() {


    this.getPlats()

    this.getTipus()
 



}
  getTipus() {
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


  selectEditPlat(nom:string, preu: string){
 
    this.selectedPlat=nom;
    this.nouNom=this.selectedPlat;
    this.preuSelectedPlat=preu;
  }


  editarPlat(){

    this.platTipusService.editPlat(this.selectedPlat, this.nouNom, parseInt(this.preuSelectedPlat)).subscribe(item=>{
      this.getPlats();
      this.getTipus();
    })
 
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
   this.platTipusService.addCategoria(categoria).subscribe(item=>{
    this.getPlats();
    this.getTipus();
   })
  
  }

  eliminarCategoria(categoria :any){  
  this.platTipusService.deleteCategoria(categoria).subscribe(item=>{
    this.getPlats();
    this.getTipus();
  });


  }

  volver(){
    this._location.back();
  }

}
