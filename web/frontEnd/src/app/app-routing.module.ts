import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComensalComponent } from './comensal/comensal.component';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import {AdminPlatsComponent} from './admin-plats/admin-plats.component';
import { LoginComponent } from './login/login.component';
import { CambrerComponentComponent } from './cambrer-component/cambrer-component.component';
import { AdminCambrersComponent } from './admin-cambrers/admin-cambrers.component';

const routes: Routes = [ 
  {path: 'crearTaula', component: CrearTaulaComponent },
  {path: 'taula/:id', component: TaulaComponent },
  {path: 'comensal', component: ComensalComponent },
  {path: 'AfegirPlat', component: AfegirPlatsComponent},
{path: 'MostrarPlat', component: MostraplatsComponent},
{path: 'adminPlats', component: AdminPlatsComponent},
{path: 'login', component: LoginComponent},
{path: 'adminCambrers', component: AdminCambrersComponent},

{path: 'cambrers/:idcambrer', component: CambrerComponentComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
