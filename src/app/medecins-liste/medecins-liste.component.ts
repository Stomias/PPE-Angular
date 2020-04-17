import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/Medecin.model';
import { MedecinService } from '../services/medecin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medecins-liste',
  templateUrl: './medecins-liste.component.html',
  styleUrls: ['./medecins-liste.component.css']
})
export class MedecinsListeComponent implements OnInit {

  medecins: Medecin[];
  medecinSubscription: Subscription;
  constructor(private medecinService: MedecinService) { }
  page = 1;
  pageSize = 30;

  ngOnInit(): void {
    this.getAllMedecins();
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      }
    );
    this.medecinService.emitMedecinSubject();
  }

  getAllMedecins() {
    this.medecinService.getAllMedecins();
  }
}
