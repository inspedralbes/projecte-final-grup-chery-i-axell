import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { ComensalComponent } from './comensal/comensal.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { TaulaService } from './services/taula.service';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { HttpClientModule } from '@angular/common/http';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import { AdminPlatsComponent } from './admin-plats/admin-plats.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaLocalComponent } from './comanda-local/comanda-local.component';
import { ComprarComandaComponent } from './comprar-comanda/comprar-comanda.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearTaulaComponent,
    TaulaComponent,
    ComensalComponent,
    AfegirPlatsComponent,
    MostraplatsComponent,
    AdminPlatsComponent,
    ComandaComponent,
    ComandaLocalComponent,
    ComprarComandaComponent,
    HomepageComponent,
    AdminComponent
  ],
  
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    FormsModule
  ],

  providers: [HttpClientModule,{provide: FIREBASE_OPTIONS, useValue:environment.firebase}],
  bootstrap: [AppComponent]
  })
export class AppModule { }
