import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  ngOnInit(): void {
  }
  constructor(public auth: AngularFireAuth, private empleados: EmpleadosService) {
  }
  login(user: string| null) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.comprobasiexisteix(user!)
  }
  logout() {
    this.auth.signOut();
  }

  comprobasiexisteix(user: string | null){
    this.empleados.getEmpleat(user!);





  }

}
