import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plato } from 'src/app/models/platoModel';

@Component({
  selector: 'app-lts-platos',
  templateUrl: './lts-platos.component.html',
  styleUrls: ['./lts-platos.component.scss']
})
export class LtsPlatosComponent implements OnInit {

  @Input() platos:Plato[]=[];
  //..
  @Output() onEdit:EventEmitter<Plato> = new EventEmitter();
  @Output() Btn:EventEmitter<string> = new EventEmitter();
  @Output() onDelete:EventEmitter<Plato>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editar(plato:Plato){
    this.Btn.emit("Actualizar Plato Típico");
    this.onEdit.emit(plato);
  }

  eliminar(plato:Plato){
    this.onDelete.emit(plato);
  }
}
