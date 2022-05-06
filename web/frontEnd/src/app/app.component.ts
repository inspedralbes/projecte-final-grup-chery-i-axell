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
  }

  ngOnInit(): void {
    
  }

}

