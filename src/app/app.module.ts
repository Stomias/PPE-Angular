import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedicamentsListeComponent } from './medicaments-liste/medicaments-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MedicamentsListeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
