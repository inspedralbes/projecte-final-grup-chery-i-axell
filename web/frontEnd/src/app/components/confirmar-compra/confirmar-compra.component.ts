import { Component, Input, OnInit } from '@angular/core';
import { TaulaService } from 'src/app/services/taula.service';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit {


  @Input() comensalList:any;
  @Input() myKey:any;

  constructor(public taulaService:TaulaService) { }

  ngOnInit(): void {
  }

  confirmar(){
    this.taulaService.confirmarCompraComensal("a", this.myKey);
  }

}
