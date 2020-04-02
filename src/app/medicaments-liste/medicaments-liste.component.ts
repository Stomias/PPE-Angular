import { Component, OnInit } from '@angular/core';
import { Medicament } from '../models/Medicament.model';
import { MedicamentService } from '../services/medicament.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medicaments-liste',
  templateUrl: './medicaments-liste.component.html',
  styleUrls: ['./medicaments-liste.component.css']
})
export class MedicamentsListeComponent implements OnInit {

  medicaments: any[];
  medicamentSubscription: Subscription;
  constructor(private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.getAllMedecins();
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) => {
        this.medicaments = medicaments;
      }
    );
    this.medicamentService.emitMedecinSubject();
  }

  getAllMedecins() {
    this.medicamentService.getAllMedicaments();
  }
}
