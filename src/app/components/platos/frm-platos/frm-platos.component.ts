import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plato } from 'src/app/models/platoModel';

@Component({
  selector: 'app-frm-platos',
  templateUrl: './frm-platos.component.html',
  styleUrls: ['./frm-platos.component.scss']
})
export class FrmPlatosComponent implements OnInit {
  frmPlato!:FormGroup;
  @Input('plato') platoRecibido!: Plato;
  @Input('lable') lableRecibido : string = "";
  @Output() onNuevoPlato: EventEmitter<Plato>=new EventEmitter();

  lableBtn:string = "Guardar Plato Típico";
  constructor(private fb: FormBuilder) { 
    // this.frmPlato=this.fb.group({
    //   id: new FormControl(''),
    //   name: new FormControl('', Validators.compose([Validators.required])),
    //   descripcion: new FormControl('', Validators.compose([Validators.required]))
    // })
    
  }

  ngOnInit(): void {
    this.frmPlato=this.fb.group({
      nombre:['',Validators.required],
      descripcion:['']
    })
  }

  ngOnChanges(changes:SimpleChanges){
    //Validación para actualización
    this.frmPlato=this.fb.group({
      id:[this.platoRecibido.id, Validators.required],
      nombre:[this.platoRecibido.nombre,Validators.required],
      descripcion:[this.platoRecibido.descripcion]
    })
    this.lableBtn = this.lableRecibido;
  }

  enviar(){
    if(this.frmPlato.valid){
      this.onNuevoPlato.emit(this.frmPlato.value)
      console.log(this.frmPlato.value)
      //this.ngOnInit();
      this.lableBtn = "Guardar Plato Típico";
    }else{
      alert('No pueden haber campos vacios')
    }
   }

}
