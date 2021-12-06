import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plato } from '../models/platoModel';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class PlatoServiceService {

  constructor(private http:HttpClient) { }

  get headers(){
    return { headers:{'Authorization': this.getToken()}}
  }

  //Metodo GET
  getPlatos(){
    return this.http.get<Plato[]>(`${baseURL}platos`, this.headers)
  }

//Metodo POT 
savePlato(data:Plato){
  return this.http.post(`${baseURL}platos`, data, this.headers);
}

//Metodo DELETE 
deletePlato(id:any){
  return this.http.delete(`${baseURL}platos/${id}`, this.headers);
}

getToken(){
  return localStorage.getItem('hash') || ''
}
}
