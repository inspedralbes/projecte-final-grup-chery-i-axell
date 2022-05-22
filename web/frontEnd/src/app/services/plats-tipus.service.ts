import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsTipusService {
 

  urlAllPlats = 'http://projectedawback.alumnes.inspedralbes.cat/back/back/public/get_plats';
  urlAllTipus = 'http://projectedawback.alumnes.inspedralbes.cat/back/back/public/get_tipus';
  urlPostPlat = 'http://projectedawback.alumnes.inspedralbes.cat/back/back/public/add_plat';
  urlPlatsTipus = "http://projectedawback.alumnes.inspedralbes.cat/back/back/public/get_plats_tipus"
  urlDeletePlat="http://projectedawback.alumnes.inspedralbes.cat/back/back/public/del_plat"
  urlAddCategoria ="http://projectedawback.alumnes.inspedralbes.cat/back/back/public/add_tipus"
  urlDeleteCategoria ="http://projectedawback.alumnes.inspedralbes.cat/back/back/public/del_tipus";


  constructor(private httpClient:HttpClient) { }


  getPlats(){
    return  this.httpClient.get(this.urlAllPlats);
  }


  addCategoria(categoria:string){
   
  
      return this.httpClient.post(this.urlAddCategoria,
      {
      "tipusnom":  categoria ,
      },)
    
  }

  deleteCategoria(categoria:string){
    return this.httpClient.post(this.urlDeleteCategoria, {"nom":categoria})

  }



  getPlatsTipus(){
    return  this.httpClient.get(this.urlPlatsTipus);
  }

  getTipus(){
    return  this.httpClient.get(this.urlAllTipus);
  }


  postPlat(plat:any){
    return this.httpClient.post(this.urlPostPlat, plat);
  }

  deletePlat(nomPlat: string) {
    
    return this.httpClient.post(this.urlDeletePlat, {"nom":nomPlat});
  }




}
