import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  rapportSubject = new Subject<any[]>();

  private rapports: any[] = [];

  emitRapportSubject() {
    this.rapportSubject.next(this.rapports.slice());
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Recupère les rapports par rappport l'id du visiteur
  getAllRapport() {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?id5-2=c14`).subscribe(
      (response) => {
        this.rapports = response;
        console.log('Chargement réussie\n' + this.rapports[10]);
        this.emitRapportSubject();
      }
    );
  }

  // Récupère les rapports par rappoort à l'id du médecin
  getAllRapportMedecin(id: string) {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?idRapport=${id}/`).subscribe(
      (response) => {
        this.rapports = response;
        console.log('Chargement réussie\n' + this.rapports[0].id);
        this.emitRapportSubject();
      }
    );
  }
}
