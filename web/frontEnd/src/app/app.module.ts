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
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AfegirPlatsComponent } from './afegir-plats/afegir-plats.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    AfegirPlatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
