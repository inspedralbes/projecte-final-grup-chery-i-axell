import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cambrer = "";

  constructor() { }

  ngOnInit(): void {

    let cam =  JSON.parse(localStorage.getItem("user")!);
    this.cambrer = cam.uid;



  }

}
