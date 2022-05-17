export class Comensal{
    name:string;
    image:string;
    key?:string;
    ready: boolean;

    constructor(name:string, image:string){
        this.name=name;
        this.image=image;
        this.ready=false;
    }

}