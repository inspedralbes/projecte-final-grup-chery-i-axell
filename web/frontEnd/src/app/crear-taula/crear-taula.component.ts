import { Component,  Inject,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-taula',
  templateUrl: './crear-taula.component.html',
  styleUrls: ['./crear-taula.component.css']
})
export class CrearTaulaComponent implements OnInit {

  codiTaula = "";



  constructor(public router: Router, @Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
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


}
