import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';


const routes: Routes = [
{path: 'AfegirPlat', component: AfegirPlatsComponent},
{path: 'MostrarPlat', component: MostraplatsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
