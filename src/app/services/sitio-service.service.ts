import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sitio } from '../models/sitioModel';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class SitioServiceService {
  
  constructor(private http: HttpClient) { }
  get headers(){
    return { headers:{'Authorization': this.getToken()}}
  }
  //Metodo GET
  getSitios(){
    return this.http.get<Sitio[]>(`${baseURL}sitios`,this.headers);
  }

  //Metodo GETbyId
  getSitio(id:any){
    return this.http.get<Sitio>(`${baseURL}sitios/${id}`, this.headers);
  }

  //Metodo POT 
  saveSitio(data:any){
    return this.http.post(`${baseURL}sitios`, data, this.headers);
  }

  //Metodo PUT
  updateSitio(data:any, id:any){
    return this.http.put(`${baseURL}sitios/${id}`, data, this.headers);
  }

  //Metodo DELETE
  deleteSitio(id: any){
    return this.http.delete(`${baseURL}sitios/${id}`, this.headers);
  }

  //VerificarToken
  getToken(){
    return localStorage.getItem('hash') || ''
  }

 
}
