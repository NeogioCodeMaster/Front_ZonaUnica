import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Municipio } from '../models/municipioModel';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }
  get headers(){
    return { headers:{'Authorization': this.getToken()}}
  }
  //Metodo GET
  getSitios(){
    return this.http.get<Municipio[]>(`${baseURL}municipios`, this.headers)
  }

  //Metodo POST
  saveMunicipio(data: any){
    return this.http.post(`${baseURL}municipios`, data, this.headers);
  }

  //Metodo DELETE
  deleteMunipio(id:any){
    return this.http.delete(`${baseURL}municipios/${id}`, this.headers);
  }

  getToken(){
    return localStorage.getItem('hash') || ''
  }
}
