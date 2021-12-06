import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Sitio } from 'src/app/models/sitioModel';
import { SitioServiceService } from 'src/app/services/sitio-service.service';

@Component({
  selector: 'app-card-sitios',
  templateUrl: './card-sitios.component.html',
  styleUrls: ['./card-sitios.component.scss']
})
export class CardSitiosComponent implements OnInit {

  //sitios: Sitio[]=[];
  idSitio: Number=0;
  estado: boolean= false;
  @Input() sitios: Sitio[]=[];
  //@Input() inOpenForm: 
  @Output() idToChange: EventEmitter<String>= new EventEmitter();
  @Output() onDelete: EventEmitter<Sitio>= new EventEmitter();
  @Output() onEdit: EventEmitter<Sitio>= new EventEmitter();

  constructor(private sitioServ: SitioServiceService) { }

  
  ngOnInit(): void {
    //this.loadSitios();
  }

  ngOnChanges(changes: SimpleChanges){
    //this.loadSitios();
  }

  editar(sitio:Sitio){
    this.onEdit.emit(sitio);
    console.log(sitio)
  }

  deleteSitio(sitio:Sitio){
    this.onDelete.emit(sitio);
  }
  
}
