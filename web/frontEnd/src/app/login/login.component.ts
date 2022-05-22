import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  userData: any;

 
  constructor(public auth: AngularFireAuth, private empleados: EmpleadosService, public authService: AuthServiceService) {
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.auth.authState.subscribe(user=>{
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);

        if(!user.email?.endsWith("@inspedralbes.cat")){
          Swal.fire({
            title: 'Error!',
            text: 'Aquest usuari no és vàlid, ha de ser del domini @inspedralbes.cat!',
            icon: 'error',
            confirmButtonText: 'Ok' 
          }).then(value=>{
            this.auth.signOut();
          })
          
        }

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })

  }


  ngOnInit(): void {
  }


  logout() {
    this.authService.logOut();
  }


}
