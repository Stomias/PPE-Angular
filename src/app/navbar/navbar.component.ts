import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authStatus: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.getLogin()){
      this.authStatus = true;
    }
    else{
      this.authStatus = false;
    }
  }

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).prenom + " " + JSON.parse(localStorage.getItem('user')).nom;
  }
  
  logout() {
    console.log('Tentative de déconnexion');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
