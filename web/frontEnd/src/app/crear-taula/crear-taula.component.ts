import { Component,  Inject,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 
import Swal from 'sweetalert2';
import { Location } from '@angular/common';



@Component({
  selector: 'app-crear-taula',
  templateUrl: './crear-taula.component.html',
  styleUrls: ['./crear-taula.component.css']
})
export class CrearTaulaComponent implements OnInit {

  codiTaula = "";



  constructor(public router: Router, @Inject(DOCUMENT) document: Document, private _location: Location) { }

  ngOnInit(): void {
  }

  volver(){
    this._location.back();
  }

  saveModal(){
    
     if(this.codiTaula==""){
      Swal.fire({
        title: 'Error!',
        text: 'El codi de la taula no pot estar buit',
        icon: 'error',
        confirmButtonText: 'Ok' 
      })
     }else{
 
      document.getElementById("buttonClose")?.click();

      this.router.navigate([`taula/${this.codiTaula}`]);
     }
  }

  goToTaula(){
    document.getElementById("buttonCloseVeureComanda")?.click();
    this.router.navigate([`estatTaula/${this.codiTaula}`]);
  }



}
