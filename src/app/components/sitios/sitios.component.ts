import { Component, OnInit } from '@angular/core';
import { Sitio } from 'src/app/models/sitioModel';
import { SitioServiceService } from 'src/app/services/sitio-service.service';

declare var $: any;

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.scss']
})
export class SitiosComponent implements OnInit {

  public sitios:Sitio[]=[];
  public auxSitio!:Sitio;
  constructor(private sitioServ: SitioServiceService) { }

  ngOnInit(): void {
    this.loadSitios();
    if(this.auxSitio!=null){
      this.addSitio();
    }
  }

  addSitio(){
    //this.idpk=id;
    $('#staticBackdrop').modal('show');
  }

  closeAddSitio(){
    $('#staticBackdrop').modal('toggle');
  }

  async loadSitios(){
    await this.sitioServ.getSitios().subscribe((sitios: any)=>{
      this.sitios=sitios;
      console.log(sitios);
    }); 
  }

  saveRegSitio(sitio:Sitio){
    this.sitioServ.saveSitio(sitio).subscribe((result:any)=>{
      console.log(result);
      this.loadSitios();
      this.closeAddSitio();
    })
  }

  editar(sitio:Sitio){
    this.addSitio();
    this.auxSitio=sitio;
    console.log("Este ----->", sitio)
    
  }

  deleteSitio(sitio:Sitio){
    this.sitioServ.deleteSitio(sitio.id).subscribe(result=>{
      //console.log(this.idSitio);
      console.log(result);
      this.loadSitios();
    })
  }

  
}
