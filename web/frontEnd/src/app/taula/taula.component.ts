import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAction, AngularFireDatabase, AngularFireList, AngularFireObject, DatabaseSnapshot, PathReference } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';

import { DOCUMENT } from '@angular/common';



import { TaulaService } from '../services/taula.service';
import { Comensal } from '../interface/Comensal';
import { ComensalComponent } from '../comensal/comensal.component';


@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css'],

})




export class TaulaComponent implements OnInit{




  public nameComensal:string="";
  public imageComensal:string="";
  public codiTaula:string | undefined;
  public comensalList:Comensal[] | undefined;
  selectedImage: string;

  


  constructor(private route:ActivatedRoute, @Inject(DOCUMENT) document:Document, private taulaService: TaulaService) {

  this.selectedImage="avatarImg1";

    this.codiTaula=this.route.snapshot.paramMap.get("id")!;

    this.taulaService.newTaula(this.codiTaula);



    this.taulaService.getComensals(this.codiTaula).snapshotChanges().subscribe(item=>{
      this.comensalList=[];
      
      if (item.length==0){
        this.askForComensal();
      }

      item.forEach(element=>{
        
        let x ={
          key: element.key,
          name: element.payload.val().name,
          image: element.payload.val().image
        }

        this.comensalList?.push(x as Comensal);
      })

      
    })
  }

  askForComensal() {
      //ABRIR MODAL
      document.getElementById("openModalComensal")?.click();
  }

  saveComensal(){
    //INSERTAR COMENSAL EN LA BASE DE DATOS

    let image = document.getElementById(this.selectedImage) as HTMLImageElement;
    let source= "assets"+image.src.split("assets")[1];
    this.taulaService.insertComensal(new Comensal(this.nameComensal, source));
  }

  seleccionarImagen(event:any){
    this.selectedImage= event.target.id;

  }

  imageIsSelected(id:string){
    return ((id==this.selectedImage)? true :false);
  }

  deleteComensal(key:string){
    this.taulaService.deleteComensal(key);
  }

  ngOnInit(): void {

  }

  
}


