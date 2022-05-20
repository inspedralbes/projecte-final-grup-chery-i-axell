
export class Plat{
$key?: string;
nom: string;
preu: number;
estat: string;
comensal: string;
quantitat: number;
taula: string;

constructor(nom:string, preu:number, estat:string, comensal:string, quantitat?: number, taula?: string){
    this.quantitat = 0;


    this.taula="";

    if(!quantitat){
    this.nom= nom;
    this.preu = preu;
    this.estat = estat;
    this.comensal=comensal;
    }

    else{
        
        this.taula = taula!;
        this.nom= nom;
        this.preu = preu;
        this.estat = estat;
        this.comensal=comensal;
        this.quantitat = quantitat;

    }

}





}