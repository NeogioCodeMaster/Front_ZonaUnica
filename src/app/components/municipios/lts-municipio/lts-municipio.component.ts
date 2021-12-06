import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Municipio } from 'src/app/models/municipioModel';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-lts-municipio',
  templateUrl: './lts-municipio.component.html',
  styleUrls: ['./lts-municipio.component.scss']
})
export class LtsMunicipioComponent implements OnInit {
  @Input() municipios: Municipio[]=[]; 
  @Output() onEdit: EventEmitter<Municipio> = new EventEmitter();
  @Output() onDelete:EventEmitter<Municipio>= new EventEmitter();
  constructor(private municipioServ: MunicipioService) { }

  
  estado: boolean= false;
  ngOnInit(): void {
    
  }

  editar(municipio:Municipio){
    this.onEdit.emit(municipio);
    console.log("Este es elmunicipio a modificar", this.onEdit.emit(municipio))
  }

  eliminar(municipio:Municipio){
    this.onDelete.emit(municipio);
  }
  
  
}
