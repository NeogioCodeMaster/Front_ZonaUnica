import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  get headers(){
    return { headers:{'Authorization': this.getToken()}}
  }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  login(data:any){
    return this.http.post(`${baseURL}usuarios/login`, data, {headers:{'Content-Type': 'application/json'}}).pipe(
      tap((data:any)=>{
        localStorage.setItem('hash', data.hash);
      }), map(res=>res)
    )
  }

  verificarToken():Observable<boolean>{
    return this.http.get(`${baseURL}verificar`, this.headers)
    .pipe(
      map((respuesta:any)=>{
        return respuesta.ok
      }),
      catchError(err=> of(false))
    )
  }
}
