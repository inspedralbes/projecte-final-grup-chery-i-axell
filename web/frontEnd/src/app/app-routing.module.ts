import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaLocalComponent } from './comanda-local/comanda-local.component';
import { ComprarComandaComponent } from './comprar-comanda/comprar-comanda.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'homepage' ,component:HomepageComponent},
  {path:'ComprarComanda' ,component:ComprarComandaComponent},
  {path:'ComandaLocal' ,component:ComandaLocalComponent},
  {path:'comanda' ,component:ComandaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
