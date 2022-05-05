import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComensalComponent } from './comensal/comensal.component';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import {AdminPlatsComponent} from './admin-plats/admin-plats.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaLocalComponent } from './comanda-local/comanda-local.component';
import { ComprarComandaComponent } from './comprar-comanda/comprar-comanda.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [ 
  {path: 'crearTaula', component: CrearTaulaComponent },
  {path: 'taula/:id', component: TaulaComponent },
  {path: 'comensal', component: ComensalComponent },
  {path: 'AfegirPlat', component: AfegirPlatsComponent},
  {path: 'MostrarPlat', component: MostraplatsComponent},
  {path: 'adminPlats', component: AdminPlatsComponent},
  {path:'' ,component:HomepageComponent},
  {path:'admin' ,component:AdminComponent},
  {path:'ComprarComanda' ,component:ComprarComandaComponent},
  {path:'ComandaLocal' ,component:ComandaLocalComponent},
  {path:'comanda' ,component:ComandaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
