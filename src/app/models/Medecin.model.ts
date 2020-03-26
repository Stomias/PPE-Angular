export class Medecin {
  constructor(public id: number, public nom: string, public prenom: string, public adresse: string, public numTel: string,
              public specialiteComplementaire: string= null, public departement: string) {}
}
