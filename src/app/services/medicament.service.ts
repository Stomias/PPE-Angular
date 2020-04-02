import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicament } from '../models/Medicament.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  medicamentSubject = new Subject<any[]>();

  private medicaments: any[] = [];

  emitMedecinSubject() {
    this.medicamentSubject.next(this.medicaments.slice());
  }

  constructor(private http: HttpClient) { }

  // Recupère les médecins
  getAllMedicaments() {
    this.http.get<any[]>(`https://webserv-gr1.sio-carriat.com/gsbapi/?nomMed`).subscribe(
      (response) => {

        this.medicaments = response;
        console.log('Chargement réussie\n' + this.medicaments[10].nomCommercial);
        this.emitMedecinSubject();

      }
    );
  }
}
