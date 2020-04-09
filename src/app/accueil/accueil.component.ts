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

  authStatus: boolean;
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
  }

  getVisiteurById(user) {
    this.authService.getVisiteurByID(user);
  }

  login(){
    this.getVisiteurById(this.model.username);
    console.log('Tentative de connexion');
    if(this.model.password == this.visiteurs[0].mdp ){
    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/']);
    }
  }

}
