export class Intervention {
    id!:number;
    nomTec!:string;
    nomClient!:string;
    adresseClient!:string;
    marque!:string;
    modele!:string;
    dateMiseEnService!:Date;
    numSerie!:string;
    description!:string;
    tempsPasser!:number;
    
    constructor(id:number, nomTec:string, nomClient:string, adresseClient:string, marque:string, modele:string, dateMiseEnService:Date, numSerie:string, description:string, tempPasser:number){
        this.id = id;
        this.nomTec = nomTec;
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marque = marque;
        this.modele = modele;
        this.dateMiseEnService = dateMiseEnService;
        this.numSerie = numSerie;
        this.description = description;
        this.tempsPasser = tempPasser;
    }
    
}