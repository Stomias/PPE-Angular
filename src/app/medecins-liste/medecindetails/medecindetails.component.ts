import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../models/Medecin.model';
import { MedecinService } from '../../services/medecin.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medecindetails',
  templateUrl: './medecindetails.component.html',
  styleUrls: ['./medecindetails.component.css']
})
export class MedecindetailsComponent implements OnInit {

  medecins: any[];
  medecinSubscription: Subscription;
  url = '';
  id = [];
  constructor(private router: Router, private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.url = this.router.url.toString();
    this.id = this.url.split('/', 3);
    this.getMedecinDetails(this.id[2]);
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.medecinService.emitMedecinSubject();
  }

  getMedecinDetails(id: string) {
    this.medecinService.getMedecinByID(id);
  }
}
