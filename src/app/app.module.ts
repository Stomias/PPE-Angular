import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedicamentsListeComponent } from './medicaments-liste/medicaments-liste.component';
import { MedecinsListeComponent } from './medecins-liste/medecins-liste.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitesListeComponent } from './visites-liste/visites-liste.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MedecinService } from 'src/app/services/medecin.service';
import { MedecindetailsComponent } from './medecins-liste/medecindetails/medecindetails.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 7360aba59199a5e8ff6f8571c4e9e398f2789191

// Pagination

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ListeMedicaments', component: MedicamentsListeComponent },
  { path: 'ListeMedecins', component: MedecinsListeComponent },
  { path: 'ListeVisites', component: VisitesListeComponent },
  { path: 'ListeMedecins/:id', component : MedecindetailsComponent},
  { path: '**', component: AccueilComponent },
  { path: 'ModifRapport', component: AccueilComponent },
  { path: 'AjoutRapport', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MedicamentsListeComponent,
    MedecinsListeComponent,
    NavbarComponent,
    VisitesListeComponent,
    MedecindetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbPaginationModule
  ],
  providers: [MedecinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
