import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Sitio } from 'src/app/models/sitioModel';
import { SitioServiceService } from 'src/app/services/sitio-service.service';

declare var $: any;
@Component({
  selector: 'app-frm-sitios',
  templateUrl: './frm-sitios.component.html',
  styleUrls: ['./frm-sitios.component.scss']
})
export class FrmSitiosComponent implements OnInit {
  frmRegSitio:FormGroup;
  @Input() idToChange: String='';
  @Input('sitioEditar') sitioEditar!:Sitio;
  @Output() nuevoRegSitio: EventEmitter<Sitio>= new EventEmitter();
  validationMessage={
    nombre: [
      {type: 'required', message: 'El campo nombre es requerido'}
    ],
    descripcion:[
      {type: 'required', message: 'El campo descripción es requerido'}
    ]
  }
  constructor(private fb: FormBuilder, private sitioServ: SitioServiceService) { 
    this.frmRegSitio=this.fb.group({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl('', Validators.compose([Validators.required])),
      // fotos: new FormControl('', Validators.compose([Validators.required])),
      // usuario: Usuario;
      // plato: new FormControl(''),
      // municipio: new FormControl('')
    })
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#btnGuardar').removeAttr('disabled');
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.frmRegSitio=this.fb.group({
      id:[this.sitioEditar.id],
      nombre:[this.sitioEditar.nombre, Validators.required],
      descripcion:[this.sitioEditar.descripcion, Validators.required],
      //municipio:[this.sitioEditar.municipio]
    });
    //this.InitFrm();
  }

  saveRegSitio(){
    if(this.frmRegSitio.valid){
      this.nuevoRegSitio.emit(this.frmRegSitio.value);
      this.InitFrm();
    }else{
      console.log("El form no funciona")
      alert("No pueden haber campos vacios")
    }
  }


  updateSitio(){
    this.fillSitioForm()
    if(this.frmRegSitio.valid){
      this.sitioServ.updateSitio(this.frmRegSitio.value, this.idToChange).subscribe(result=>{
        
      })
    }
  }

  InitFrm()
  {
    this.frmRegSitio.setValue(
      {
        nombre: '',
        descripcion: ''
      }
    );
  }

  fillSitioForm(){
    if(this.idToChange!=''){
      this.sitioServ.getSitio(this.idToChange).subscribe(result=>{
        console.log(result);
        this.frmRegSitio.setValue({
          nombre: result.nombre,
          descripcion: result.descripcion,
          municipio: result.municipio,
          plato: result.plato
        })
      })
    }else{
      console.log("No hay Sitio seleccionado")
    }
  }
}
