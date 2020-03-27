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

  medecins: any[];
  medecinSubscription: Subscription;
  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    // this.medecinService.emitMedecinSubject();
    this.getAllMedecins();
  }

  getAllMedecins() {
    this.medecinService.getAllMedecins();
  }
}
