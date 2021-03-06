import { Component, Input, OnInit } from '@angular/core';
import { TaulaService } from 'src/app/services/taula.service';
declare var bootstrap: any;

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css']
})
export class ConfirmarCompraComponent implements OnInit {


  modal! : any;
  @Input() comensalList:any;
  @Input() myKey:any;
  @Input() isReady:any;
  @Input() keyTaula:any;

  constructor(public taulaService:TaulaService) { 
  }



  ngOnInit(): void {
    this.modal = new bootstrap.Modal(document.getElementById('modalConfirm'))
  }

  confirmar(){
    this.taulaService.confirmarCompraComensal(this.keyTaula, this.myKey);
  }
  unConfirm(){
    this.taulaService.unConfirmCompraComensal(this.keyTaula,this.myKey);
  }

  openModal(){
    this.modal.show();
  }

  closeModal(){
    this.modal.hide();
  }

}
