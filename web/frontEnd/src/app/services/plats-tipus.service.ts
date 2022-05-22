import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsTipusService {
 

  urlAllPlats = 'http://192.168.210.169:8000/get_plats';
  urlAllTipus = 'http://192.168.210.169:8000/get_tipus';
  urlPostPlat = 'http://192.168.210.169:8000/add_plat';
  urlPlatsTipus = "http://192.168.210.169:8000/get_plats_tipus"
  urlDeletePlat="http://192.168.210.169:8000/del_plat"
  urlAddCategoria ="http://192.168.210.169:8000/add_tipus"
  urlDeleteCategoria ="http://192.168.210.169:8000/del_tipus";


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
