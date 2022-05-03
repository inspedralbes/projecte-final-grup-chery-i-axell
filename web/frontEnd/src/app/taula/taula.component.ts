import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAction, AngularFireDatabase, AngularFireList, AngularFireObject, DatabaseSnapshot, PathReference } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';
import { Taula  } from '../interface/Taula';
import { ComensalComponent } from '../comensal/comensal.component';

import { Directive, ViewContainerRef } from '@angular/core';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})




export class TaulaComponent implements OnInit, AfterViewInit{


  @ViewChild(DynamicComponentDirective) dynamic!:DynamicComponentDirective

  public nameComensal:string="";
  public codiTaula:string;
  public llistaTaulaRef:any;
  public llistaSubscription:Subscription;
  public taulaRef:any;
  public taulaObject:any;
  public comensals:any;


  constructor(private route:ActivatedRoute, private db:AngularFireDatabase, @Inject(DOCUMENT) document:Document) {

    this.codiTaula=this.route.snapshot.paramMap.get("id")!;
    this.llistaTaulaRef= db.list("taules");
    this.llistaSubscription= this.llistaTaulaRef.snapshotChanges().subscribe((result:AngularFireAction<DatabaseSnapshot<any>>[])=>{
      //this.crearTaulaSiNoExisteix(result)
    
      let existe = false;
      result.forEach(element => {
        
        let taula = element.payload.val();
        
        if(taula.codiTaula==this.codiTaula){
          existe=true;
          let key = element.key as PathReference;
          this.taulaObject = db.object(key);
          this.comensals= db.list(`/taules/${key}/comensals`);
        
          
        }
    
      });
        if(!existe){
          this.taulaRef=this.llistaTaulaRef.push({codiTaula: this.codiTaula})
      //    this.afegirComensal()
          this.llistaSubscription.unsubscribe()
        }


        this.mostrarComensales();


    })

  }
  mostrarComensales() {
    let subs = this.comensals.valueChanges().subscribe((result: any)=>{
      console.log(result)
      result.forEach((element: { nameComensal: any; }) => {
        const viewContainerRef= this.dynamic.viewContainerRef;
    const componentRef= viewContainerRef.createComponent<any>(ComensalComponent);
    componentRef.instance.nameComensal=element.nameComensal;
      });

      

    })
  }

  afegirComensal() {
  
    //ABRIR MODAL
  
      document.getElementById("openModalComensal")?.click();
      //GUARDAR DATOS MODAL
      let nombreGuardar = this.nameComensal;
      //ENVIAR DATOS DEL MODAL A FIREBASE
      
      //RENDERIZAR NUEVO COMENSAL
  }


  ngAfterViewInit(): void {
   
    

  }
  generateComponent(){
   /*  const viewContainerRef= this.dynamic.viewContainerRef;
    const componentRef= viewContainerRef.createComponent<any>(ComensalComponent);
    componentRef.instance.nameComensal=this.nameComensal; */

    this.comensals.push({comensal:this.nameComensal});
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    this.llistaSubscription.unsubscribe()
  }

  crearTaulaSiNoExisteix(result:Taula[]){
    let existe = false;
    result.forEach(element => {
      if(element.codiTaula==this.codiTaula){
        existe=true;
        console.log(element)
      }
    });
    if(!existe){
    this.taulaRef= this.llistaTaulaRef.push({codiTaula: this.codiTaula});
    console.log(this.taulaRef)
    this.llistaSubscription.unsubscribe();
    
  }
    }
  
}


