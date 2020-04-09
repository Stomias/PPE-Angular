import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  authStatus: boolean;
  model: any = {};
  visiteurs: any[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getVisiteurById(this.model.username);
  }

  getVisiteurById(user) {
    this.authService.getVisiteurByID(user);
  }

  login(){
    this.getVisiteurById(this.model.username);
    console.log('Tentative de connexion');
    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/']);
  }

}
