import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedicamentsListeComponent } from './medicaments-liste/medicaments-liste.component';
import { MedecinsListeComponent } from './medecins-liste/medecins-liste.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitesListeComponent } from './visites-liste/visites-liste.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ListeMedicaments', component: MedicamentsListeComponent },
  { path: 'ListeMedecins', component: MedecinsListeComponent },
  { path: 'ListeVisites', component: VisitesListeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MedicamentsListeComponent,
    MedecinsListeComponent,
    NavbarComponent,
    VisitesListeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
