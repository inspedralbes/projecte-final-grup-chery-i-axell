import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any;
  password: any;


  constructor(private httpclient:HttpClient,private router:Router) {
  }

  
  ngOnInit(): void {
    
  }
  login(){
    this.router.navigate(['/login']);
  }

}

