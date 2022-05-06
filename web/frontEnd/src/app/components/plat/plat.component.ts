import { Component, Input, OnInit } from '@angular/core';
import { Plat } from 'src/app/model/Plat';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {


  @Input() plat!:Plat;
  constructor() { }

  ngOnInit(): void {
  }

}
