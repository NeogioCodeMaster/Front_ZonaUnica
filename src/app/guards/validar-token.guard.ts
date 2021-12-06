import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private usuarioServ: UsuarioService, private router:Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.usuarioServ.verificarToken().pipe(
      tap((valido)=>{
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.usuarioServ.verificarToken().pipe(
      tap((valido)=>{
        if(!valido){
          this.router.navigateByUrl("")
        }
      })
    );
  }
}
