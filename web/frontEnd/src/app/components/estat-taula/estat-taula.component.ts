import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaulaService } from 'src/app/services/taula.service';

@Component({
  selector: 'app-estat-taula',
  templateUrl: './estat-taula.component.html',
  styleUrls: ['./estat-taula.component.css']
})
export class EstatTaulaComponent implements OnInit {
  codiTaula: any;
  llistaPlats:any;

  constructor(private route:ActivatedRoute, private taulaService: TaulaService) { 
    this.codiTaula=this.route.snapshot.paramMap.get("id")!;
  
    this.taulaService.getPlatsDeTaula(this.codiTaula).snapshotChanges().subscribe(item=>{
      this.llistaPlats=[];
      
      item.forEach(element=>{
        
        let x ={
          key: element.key,
          nom: element.payload.val().nom,
          estat: element.payload.val().estat,
          comensal: element.payload.val().comensal,
          preu: element.payload.val().preu,
        }

        this.llistaPlats?.push(x);
      })

      console.log(this.llistaPlats)
      
    })






  }

  ngOnInit(): void {
  }

}
