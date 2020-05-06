import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { RapportService } from '../services/rapport.service';
import { Rapport } from '../models/Rapport.model';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  idRapport: number;
  nom: string;
  prenom: string;
}


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
  page = 1;
  pageSize = 15;



  constructor(private rapportService: RapportService, public dialog: MatDialog) { }

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

  openDialog(i): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {id: this.rapports[i].id , nom: this.rapports[i].nom, prenom: this.rapports[i].prenom}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
