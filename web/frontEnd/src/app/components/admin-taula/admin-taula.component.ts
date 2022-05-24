import { Component, OnInit } from '@angular/core';
import { TaulaService } from 'src/app/services/taula.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-taula',
  templateUrl: './admin-taula.component.html',
  styleUrls: ['./admin-taula.component.css']
})
export class AdminTaulaComponent implements OnInit {


  public taules:any[]=[];

  constructor(public taulaService:TaulaService,private _location: Location) {

    
    this.taulaService.getTaules().snapshotChanges().subscribe(taules=>{
      this.taules=[];
      taules.forEach(taula=>{
        this.taules.push(taula.key)
      })
    })



   }

  ngOnInit(): void {

  }

  borrar(t: string){  

  this.taulaService.deleteTaula(t);
  }

  volver(){
    this._location.back();
  }

}
