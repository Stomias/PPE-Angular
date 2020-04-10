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
  index: string = '0';
  unMedicament: any[];

  ngOnInit(): void {
    this.getAllMedicaments();
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) => {
        this.medicaments = medicaments;
      }
    );
    this.medicamentService.emitMedicamentSubject();
  }

  getAllMedicaments() {
    this.medicamentService.getAllMedicaments();
  }

  modal(i){
    this.index = i;
    this.unMedicament = this.medicaments[0];
  }

  getIndex(){
    return this.index;
  }
}
