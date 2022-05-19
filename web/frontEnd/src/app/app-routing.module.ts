import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComensalComponent } from './comensal/comensal.component';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import { EstatTaulaComponent } from './components/estat-taula/estat-taula.component';
import {AdminPlatsComponent} from './admin-plats/admin-plats.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CambrerComponentComponent } from './cambrer-component/cambrer-component.component';
import { AdminTaulaComponent } from './components/admin-taula/admin-taula.component';

const routes: Routes = [ 
  {path: 'crearTaula', component: CrearTaulaComponent },
  {path: 'taula/:id', component: TaulaComponent },
  {path: 'afegirPlat', component: AfegirPlatsComponent},
  {path: 'adminPlats', component: AdminPlatsComponent},
  {path: 'estatTaula/:id', component: EstatTaulaComponent},
  {path:'' ,component:HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cambrers/:idcambrer', component: CambrerComponentComponent},
  {path: 'adminTaula', component: AdminTaulaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
