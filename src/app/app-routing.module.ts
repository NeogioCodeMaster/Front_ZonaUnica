import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { PlatosComponent } from './components/platos/platos.component';
import { CardSitiosComponent } from './components/sitios/card-sitios/card-sitios.component';
import { FrmSitiosComponent } from './components/sitios/frm-sitios/frm-sitios.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [//{
  {
    path:'', 
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'registrar', 
    component:RegistroComponent
  },
{
  path: 'sitios',
  component: SitiosComponent,
  canActivate: [ValidarTokenGuard],
  canLoad: [ValidarTokenGuard], 
},
{
  path:'sitioNuevo', 
  component:FrmSitiosComponent
},
{
  path: 'municipios',
  component: MunicipiosComponent,
  canActivate: [ValidarTokenGuard],
  canLoad: [ValidarTokenGuard], 
},
{
  path: 'platos',
  component: PlatosComponent,
  canActivate: [ValidarTokenGuard],
  canLoad: [ValidarTokenGuard], 
},
{
  path: 'sitioNuevo', 
  component: FrmSitiosComponent},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'sitios'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
