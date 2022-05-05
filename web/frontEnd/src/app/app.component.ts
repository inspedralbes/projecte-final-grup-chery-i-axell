import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any;
  password: any;


  constructor(private httpclient:HttpClient) {

  constructor() {

  }
  ngOnInit(): void {
    
  }


  login(){

    this.httpclient.post("",
    {
    "usuario":  this.usuario ,
    "password":  this.password ,
    },)
    .subscribe(
    data => {
    console.log("POST Request is successful ", data);
    },
    error => {
    console.log("Error", error);
    }
    );


  }

}
}
