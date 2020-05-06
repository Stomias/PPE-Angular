import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RapportService } from '../services/rapport.service';
import { Rapport } from '../models/Rapport.model';

@Component({
  selector: 'app-visites-liste',
  templateUrl: './visites-liste.component.html',
  styleUrls: ['./visites-liste.component.css']
})
export class VisitesListeComponent implements OnInit {

  rapports: Rapport[] = [];
  rapportSubscription: Subscription;
  searchText: string;
  tabSearchText: string[];
  constructor(private rapportService: RapportService) { }
  page = 1;
  pageSize = 15;
  ngOnInit(): void {
    this.getAllRapport();
    this.rapportSubscription = this.rapportService.rapportSubject.subscribe(
      (rapports: any[]) => {
        this.rapports = rapports;
      }
    );
    this.rapportService.emitRapportSubject();
  }

  getAllRapport() {
    this.rapportService.getAllRapport();
  }
}
