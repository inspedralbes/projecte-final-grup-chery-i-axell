import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comensal',
  templateUrl: './comensal.component.html',
  styleUrls: ['./comensal.component.css'] ,
  host: {'class': 'col-sm-2 col-xs-6'}
})
export class ComensalComponent implements OnInit {


  @Input() name : string="name";
  @Input() image : string="/assets/images/avatar-astro-1";
  @Input() isOnConfirmModal : boolean=false;

  constructor() {
   }

  ngOnInit(): void {
    if(this.isOnConfirmModal){
      console.log("On MODal")
    }
  }
  

}
