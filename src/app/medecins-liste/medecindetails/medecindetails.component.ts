import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../models/Medecin.model';
import { Rapport } from '../../models/Rapport.model';
import { MedecinService } from '../../services/medecin.service';
import { RapportService } from '../../services/rapport.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medecindetails',
  templateUrl: './medecindetails.component.html',
  styleUrls: ['./medecindetails.component.css']
})
export class MedecindetailsComponent implements OnInit {

  medecins: Medecin[];
  medecinSubscription: Subscription;
  rapports: Rapport[];
  rapportSubscription: Subscription;
  url = '';
  id = [];
  constructor(private router: Router, private medecinService: MedecinService, private rapportService: RapportService) { }

  ngOnInit(): void {
    this.url = this.router.url.toString();
    this.id = this.url.split('/', 3);
    this.getMedecinDetails(this.id[2]);
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.getRapportOfMedecin(this.id[2]);
    this.rapportSubscription = this.rapportService.rapportSubject.subscribe(
      (rapports: any[]) => {
        this.rapports = rapports;
      }
    );
    this.medecinService.emitMedecinSubject();
  }

  getMedecinDetails(id: string) {
    this.medecinService.getMedecinByID(id);
  }

  getRapportOfMedecin(idMed: string) {
    this.rapportService.getAllRapportMedecin(idMed);
  }

  updateMedecinDetails(id: string, adresse: string, tel: string, specomplementaire: string) {
    this.medecinService.updateMedecinDetails(id, adresse, tel, specomplementaire);
  }
}
