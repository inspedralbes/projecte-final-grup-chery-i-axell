import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';

const routes: Routes = [
{path: 'AfegirPlat', component: AfegirPlatsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
