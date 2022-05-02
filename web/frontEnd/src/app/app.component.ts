import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import {AngularFireDatabase} from '@angular/fire/compat/database';
>>>>>>> 9359fa60721176979cc4becf2ca546ee49c5a39a

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontEnd';



<<<<<<< HEAD
  constructor() {
=======
  constructor(private db:AngularFireDatabase) {
>>>>>>> 9359fa60721176979cc4becf2ca546ee49c5a39a

  let ref = db.object("prueba");

  ref.set({valor: "Funciona"});

  }



}
