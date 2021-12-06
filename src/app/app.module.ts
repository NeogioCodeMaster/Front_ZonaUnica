import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SitiosComponent } from './components/sitios/sitios.component';
import { PlatosComponent } from './components/platos/platos.component';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardSitiosComponent } from './components/sitios/card-sitios/card-sitios.component';

import { HttpClientModule } from '@angular/common/http';
import { FrmSitiosComponent } from './components/sitios/frm-sitios/frm-sitios.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FrmMunicipioComponent } from './components/municipios/frm-municipio/frm-municipio.component';
import { LtsMunicipioComponent } from './components/municipios/lts-municipio/lts-municipio.component';
import { FrmPlatosComponent } from './components/platos/frm-platos/frm-platos.component';
import { LtsPlatosComponent } from './components/platos/lts-platos/lts-platos.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SitiosComponent,
    PlatosComponent,
    MunicipiosComponent,
    MenuComponent,
    CardSitiosComponent,
    FrmSitiosComponent,
    FrmMunicipioComponent,
    LtsMunicipioComponent,
    FrmPlatosComponent,
    LtsPlatosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
