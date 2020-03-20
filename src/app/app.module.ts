import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedicamentsListeComponent } from './medicaments-liste/medicaments-liste.component';
import { MedecinsListeComponent } from './medecins-liste/medecins-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MedicamentsListeComponent,
    MedecinsListeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
