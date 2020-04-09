import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medecin } from '../models/Medecin.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  medecinSubject = new Subject<any[]>();

  private medecins: Medecin[] = [];

  emitMedecinSubject() {
    this.medecinSubject.next(this.medecins.slice());
  }

  constructor(private http: HttpClient) { }

  // Recupère les médecins
  getAllMedecins() {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?noms`).subscribe(
      (response) => {
        this.medecins = response;
        console.log('Chargement réussie\n' + this.medecins[10].nom);
        this.emitMedecinSubject();
      }
    );
  }

  getMedecinByID(id: string) {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?id=${id}/`).subscribe(
      (response) => {
        this.medecins = response;
        console.log('Chargement réussie\n' + this.medecins[0].tel);
        this.emitMedecinSubject();
      }
    );
  }

  updateMedecinDetails(id: string, adresse: string, tel: string, spe: string) {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?id2=${id}&adresse=${adresse}&tel=${tel}&speComplementaire=${spe}/`)
    .subscribe(
      (response) => {
        this.medecins = response;
        console.log('Chargement réussie\n' + this.medecins[0].tel);
        this.emitMedecinSubject();
      }
    );
  }
}
