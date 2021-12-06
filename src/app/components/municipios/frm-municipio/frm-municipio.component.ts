import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Municipio } from 'src/app/models/municipioModel';

declare var $: any;
@Component({
  selector: 'app-frm-municipio',
  templateUrl: './frm-municipio.component.html',
  styleUrls: ['./frm-municipio.component.scss']
})
export class FrmMunicipioComponent implements OnInit {
  @Output() nuevoMunicipio: EventEmitter<Municipio>= new EventEmitter();
  @Input('municipio') municRecibido!:Municipio;
  frmMunicipio:FormGroup;
  municipiosDropD: String[]=["Amazonas","Antioquia","Arauca","Atlántico","Bolívar","Boyacá","Caldas","Caquetá","Casanare","Cauca","Cesar","Chocó",
    "Córdoba","Cundinamarca","Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta","Nariño","Norte de Santander","Putumayo","Quindío","Risaralda",
    "San Andrés y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaupés","Vichada",
    ]
  validationMessage={
    nombre: [
      {type: 'required', message: 'El campo nombre es requerido'}
    ],
    descripcion:[
      {type: 'required', message: 'El campo descripción es requerido'}
    ]
  }
  constructor(private fb: FormBuilder) { 
    this.frmMunicipio= this.fb.group({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl('', Validators.compose([Validators.required])),
      departamento: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.frmMunicipio=this.fb.group({
      id:[this.municRecibido.id],
      nombre:[this.municRecibido.nombre, Validators.required],
      descripcion:[this.municRecibido.descripcion, Validators.required],
      departamento:[this.municRecibido.departamento]
    });
    //this.InitFrm();
  }

  saveMunincipio(){
    if(this.frmMunicipio.valid){
      this.nuevoMunicipio.emit(this.frmMunicipio.value);
      this.InitFrm();
    }else{
      console.log("El form no funciona")
      alert("No pueden haber campos vacios")
    }
  }

  InitFrm()
  {
    this.frmMunicipio.setValue(
      { 
        id:'',
        nombre: '',
        descripcion: '',
        departamento: null
      }
    );
  }

}
