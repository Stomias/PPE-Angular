export class Medecin {
  constructor(public id: number, public nom: string, public prenom: string, public adresse: string, public tel: string,
              public specialitecomplementaire: string= null, public departement: string) {}
}
