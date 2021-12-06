import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/models/municipioModel';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {
  public municipios: Municipio[]=[]
  public auxMunicipio!: Municipio;
  constructor(private municipioServ: MunicipioService) { }

  ngOnInit(): void {
    this.loadMunicipio();
  }

  async loadMunicipio(){
    await this.municipioServ.getSitios().subscribe(results=>{
      console.log(results);
      this.municipios=results;
    })
  }

  saveMunicipio(municipio:Municipio){
    this.municipioServ.saveMunicipio(municipio).subscribe((result:any)=>{
      console.log(result);
      this.loadMunicipio();
    })
  }

  editar(municipio:Municipio){
    if(municipio)
    this.auxMunicipio=municipio;
    console.log("Este ----->", municipio)
  }

  eliminar(municipio:Municipio){
    this.municipioServ.deleteMunipio(municipio.id).subscribe(result=>{
      console.log(result);
      this.loadMunicipio();
    })
  }

}
