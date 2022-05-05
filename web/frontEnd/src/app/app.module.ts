import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaLocalComponent } from './comanda-local/comanda-local.component';
import { ComprarComandaComponent } from './comprar-comanda/comprar-comanda.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ComandaComponent,
    ComandaLocalComponent,
    ComprarComandaComponent,
    HomepageComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())

  ],
  providers: [HttpClientModule,{provide: FIREBASE_OPTIONS, useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
