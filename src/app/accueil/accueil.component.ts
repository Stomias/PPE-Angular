import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  authStatus: boolean = false;
  model: any = {};
  visiteurs: any[];
  visiteurSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getVisiteurById(this.model.username);
    this.visiteurSubscription = this.authService.AuthSubject.subscribe(
      (visiteurs: any[]) => {
        this.visiteurs = visiteurs;
      }
    );
    this.authService.emitAuthSubject();
    if(this.GetLogin()){
      this.authStatus = true;
    }
    else{
      this.authStatus = false;
    }
  }

  getVisiteurById(user) {
    this.authService.getVisiteurByID(user);
  }

  login(){
    this.getVisiteurById(this.model.username);
    console.log('Tentative de connexion');
    if(this.model.password == this.visiteurs[0].mdp ){
    localStorage.setItem('user', JSON.stringify({ prenom: this.visiteurs[0].prenom, nom: this.visiteurs[0].nom}));
    this.router.navigate(['/']);
    this.authStatus = true;
    }
  }

  logout() {
    console.log('Tentative de déconnexion');
    this.authStatus = false;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  GetLogin(){
    return JSON.parse(localStorage.getItem('user')).prenom + " " + JSON.parse(localStorage.getItem('user')).nom;
  }

}
