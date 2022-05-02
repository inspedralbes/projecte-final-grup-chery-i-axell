import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-afegir-plats',
  templateUrl: './afegir-plats.component.html',
  styleUrls: ['./afegir-plats.component.css']
})
export class AfegirPlatsComponent implements OnInit {

  constructor(private httpclient:HttpClientModule) { }

  ngOnInit(): void {


  }

}
