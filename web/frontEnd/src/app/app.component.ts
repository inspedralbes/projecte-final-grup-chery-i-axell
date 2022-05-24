import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario: any;
  password: any;


  constructor(private authService:AuthServiceService,private router:Router) {
  }

  
  ngOnInit(): void {
    
  }
  login(){
    this.router.navigate(['/login']);
  }

  checkIfLoged(){
    return this.authService.isLoggedIn();
  }


  logOut(){
    this.authService.logOut();
  }




}

