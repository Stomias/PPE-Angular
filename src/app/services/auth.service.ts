import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AuthSubject = new Subject<any[]>();

  private visiteurs: any[] = [];

  emitAuthSubject() {
    this.AuthSubject.next(this.visiteurs.slice());
  }

  constructor(private http: HttpClient) { }

  getVisiteurByID(id: string) {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?login=${id}/`).subscribe(
      (response) => {
        this.visiteurs = response;
        console.log('Chargement réussie\n' + this.visiteurs[0].nom);
        this.emitAuthSubject();
      }
    );
  }
}