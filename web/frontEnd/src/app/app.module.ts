import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { PruebaComponent } from './prueba/prueba.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CrearTaulaComponent } from './crear-taula/crear-taula.component';
import { TaulaComponent } from './taula/taula.component';
import { ComensalComponent } from './comensal/comensal.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { TaulaService } from './services/taula.service';

import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { HttpClientModule } from '@angular/common/http';
import { MostraplatsComponent } from './mostraplats/mostraplats.component';
import { EstatTaulaComponent } from './components/estat-taula/estat-taula.component';
import { PlatComponent } from './components/plat/plat.component';
import { AdminPlatsComponent } from './admin-plats/admin-plats.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    CrearTaulaComponent,
    TaulaComponent,
    ComensalComponent,
    AfegirPlatsComponent,
    MostraplatsComponent,
    EstatTaulaComponent,
    PlatComponent,
    AdminPlatsComponent,

  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    FormsModule
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue:environment.firebase},
  TaulaService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
