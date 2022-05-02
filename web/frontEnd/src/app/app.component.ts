import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontEnd';



  constructor(private db:AngularFireDatabase) {

  let ref = db.object("prueba");

  ref.set({valor: "Funciona"});

  }



}
