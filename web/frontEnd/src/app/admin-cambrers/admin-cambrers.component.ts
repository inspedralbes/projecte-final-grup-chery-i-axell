import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Empleat } from '../model/Empleat';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-admin-cambrers',
  templateUrl: './admin-cambrers.component.html',
  styleUrls: ['./admin-cambrers.component.css']
})
export class AdminCambrersComponent implements OnInit {

  public elsmeusEmpleats: any[] = [] ;

  constructor(private empleatsservice: EmpleadosService) { }

  ngOnInit(): void {

    this.empleatsservice.getEmpleats().snapshotChanges().subscribe(data =>{
      console.log(data)
  
        data.forEach(element=>{

        console.log(element.payload.val())
        let obj= element.payload.val() as Empleat;



        let empleat ={
          key: element.key,
          nom: obj.nom,
          email: obj.email,
        }

        this.elsmeusEmpleats.push(empleat)

        
      })


    });


  }

}
