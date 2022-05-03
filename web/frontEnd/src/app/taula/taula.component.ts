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
  public codiTaula:string | undefined;
  public llistaTaulaRef:any;
  public llistaSubscription:Subscription | undefined;
  public taulaRef:any;
  public taulaObject:any;
  public comensals:any;

  public comensalList:Comensal[] | undefined;


  constructor(private route:ActivatedRoute, private db:AngularFireDatabase, @Inject(DOCUMENT) document:Document, private taulaService: TaulaService) {

    

    this.codiTaula=this.route.snapshot.paramMap.get("id")!;

    this.taulaService.newTaula(this.codiTaula);

    this.taulaService.insertComensal(new ComensalComponent());


    this.taulaService.getComensals().snapshotChanges().subscribe(item=>{
      this.comensalList=[];
      item.forEach(element=>{
       /*  let x= element.payload.toJSON();
        x["key"]=element.key; */
        let x ={
          key: element.key,
          name: element.payload.val().name,
          image: element.payload.val().image
        }

        this.comensalList?.push(x as Comensal);
      })
    })

/*     this.codiTaula=this.route.snapshot.paramMap.get("id")!;
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


    }) */

  }


  ngOnInit(): void {
  
  }

  
}


