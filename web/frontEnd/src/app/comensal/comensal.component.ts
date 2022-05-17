import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() key : string| undefined;
  @Input() checkIfMe!:string;

  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }


  deleteComensal(){
    this.delete.emit(this.key);
  }


  selectComensal(){
    this.select.emit(this.key)
  }

  

}
