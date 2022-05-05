import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComensalComponent } from './comensal/comensal.component';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import { EstatTaulaComponent } from './components/estat-taula/estat-taula.component';

const routes: Routes = [ 
  {path: 'crearTaula', component: CrearTaulaComponent },
  {path: 'taula/:id', component: TaulaComponent },
  {path: 'comensal', component: ComensalComponent },
  {path: 'AfegirPlat', component: AfegirPlatsComponent},
  {path: 'MostrarPlat', component: MostraplatsComponent},
  {path: 'estatTaula/:id', component: EstatTaulaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
