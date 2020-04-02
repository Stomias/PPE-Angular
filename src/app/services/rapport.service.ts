import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  rapportSubject = new Subject<any[]>();

  private rapports: any[] = [];

  emitRapportSubject() {
    this.rapportSubject.next(this.rapports.slice());
  }

  constructor(private http: HttpClient) { }

  // Recupère les rapports
  getAllRapport() {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?id5-2=c14`).subscribe(
      (response) => {
        this.rapports = response;
        console.log('Chargement réussie\n' + this.rapports[10]);
        this.emitRapportSubject();
      }
    );
  }
}
