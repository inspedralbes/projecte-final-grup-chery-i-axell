import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';
import { Taula  } from '../interface/taula';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})




export class TaulaComponent implements OnInit {


  public codiTaula:string;
  public llistaTaulaRef:any;
  public llistaSubscription:Subscription;
  public taulaRef:any;

  constructor(private route:ActivatedRoute, private db:AngularFireDatabase) {

    this.codiTaula=this.route.snapshot.paramMap.get("id")!;
    this.llistaTaulaRef= db.list("taules");


    this.llistaSubscription= this.llistaTaulaRef.valueChanges().subscribe((result: Taula[])=>this.crearTaulaSiNoExisteix(result))
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    this.llistaSubscription.unsubscribe()
  }

  crearTaulaSiNoExisteix(result:Taula[]){
    let existe = false;
    result.forEach(element => {
      console.log(element)
      if(element.codiTaula==this.codiTaula){
        existe=true;
      }
    });
    if(!existe){
    this.llistaTaulaRef.push({codiTaula: this.codiTaula});
    this.llistaSubscription.unsubscribe();
    
  }
    }
  
}
