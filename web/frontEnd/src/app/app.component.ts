import { Component } from '@angular/core';
import { Angul } from '@angular/fire/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontEnd';



  constructor(private db: AngularFireDatabase) {



  }



}
