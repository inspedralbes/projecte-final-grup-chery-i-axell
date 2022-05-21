import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { TaulaService } from '../services/taula.service';
import { Comensal } from '../interface/Comensal';
import { ComensalComponent } from '../comensal/comensal.component';
import { ConfirmarCompraComponent } from '../components/confirmar-compra/confirmar-compra.component';
declare var bootstrap: any;

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css'],

})




export class TaulaComponent implements OnInit, OnDestroy{



  @ViewChild(ConfirmarCompraComponent) confirmarCompraComponent!: ConfirmarCompraComponent;
  public nameComensal:string="";
  public keyComensal:string="";
  public imageComensal:string="";
  public codiTaula:string ;
  public comensalList:Comensal[] | undefined;
  selectedImage: string;
  public myComensalKey!:string;
  imReady: any;

  


  constructor(private route:ActivatedRoute,  private taulaService: TaulaService, public router: Router) {


    this.selectedImage="avatarImg1";

    this.codiTaula=this.route.snapshot.paramMap.get("id")!;

    this.taulaService.newTaula(this.codiTaula);



    this.taulaService.getComensals(this.codiTaula).snapshotChanges().subscribe(item=>{
      this.comensalList=[];
      
     

      item.forEach(element=>{
        
        let x ={
          key: element.key,
          name: element.payload.val().name,
          image: element.payload.val().image,
          ready:element.payload.val().ready
        }

        if(x.name==this.nameComensal){
          this.myComensalKey=x.key!;
          this.imReady=x.ready;
        }

        this.comensalList?.push(x as Comensal);
      })


      this.checkConfirmed();
      
    })
  }


  checkConfirmed(){

    let requiredConfirms = this.comensalList?.length;
    let nConfirms = 0;
    this.comensalList!.forEach(item=>{
        (item.ready)?nConfirms++:null;
    });
    
    
    (nConfirms==requiredConfirms&& nConfirms!=0)? this.sendComanda(): null;


  }

  sendComanda(){
  this.taulaService.enviarComanda(this.codiTaula);
  this.taulaService.deletePlatsTemporal(this.codiTaula);
  this.taulaService.setComensalsToUnReady(this.codiTaula);

  this.router.navigate([`estatTaula/${this.codiTaula}`]);
 
  }



  askForComensal() {
      //ABRIR MODAL
    //  document.getElementById("openModalComensal")?.click();
  
    this.taulaService.deletePlatsTemporalComensal(this.codiTaula, this.nameComensal);
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  
    myModal.toggle();

  }

  saveComensal(){
    //INSERTAR COMENSAL EN LA BASE DE DATOS
   
    let image = document.getElementById(this.selectedImage) as HTMLImageElement;
    let source= "assets"+image.src.split("assets")[1];
    this.taulaService.insertComensal(new Comensal(this.nameComensal, source));
    localStorage.setItem("comensal"+this.codiTaula,this.nameComensal);
  }

  seleccionarImagen(event:any){
    this.selectedImage= event.target.id;

  }

  imageIsSelected(id:string){
    return ((id==this.selectedImage)? true :false);
  }

  deleteComensal(key:string){
    this.taulaService.deleteComensal(key);
    this.taulaService.deletePlatsTemporalComensal(this.codiTaula, this.nameComensal);
    this.nameComensal="";

  }

  selectComensal(key:string){
    this.taulaService.deleteComensal(key);
    this.askForComensal();
  }


  ngOnInit(): void {
    let comensal =localStorage.getItem("comensal"+this.codiTaula);
    if(comensal==null || comensal==""){
      this.askForComensal();
    }else{
      this.nameComensal=comensal;
    }
  }

  ngOnDestroy(): void {
    this.confirmarCompraComponent.closeModal();
  }



  
}


