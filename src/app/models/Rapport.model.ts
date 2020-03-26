export class Rapport {
  constructor(public id: number, public nom: string, public prenom: string, public adresse: string, public numTel: string,
              public specialiteComplementaire: string= null, public departement: string, public date: Date,
              public motifRapport: string, public bilan: string, public idVisiteur: string, public idMedecin: number) {}
}
