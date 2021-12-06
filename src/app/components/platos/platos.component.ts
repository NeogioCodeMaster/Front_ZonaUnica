import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/platoModel';
import { PlatoServiceService } from 'src/app/services/plato-service.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss']
})
export class PlatosComponent implements OnInit {
   //Arreglo que va a contener la respuesta del servidor
   public platos: Plato[] = [];
   public auxPlato!: Plato;
   mensaje: string="";
   estado: boolean = false;
   lable: string="";
 
  constructor(private platoService: PlatoServiceService ) { }

  ngOnInit(): void {
    this.traerPlatos();
  }

   //Utilizando el método del servicio por GET
   traerPlatos(){
   
    this.platoService.getPlatos().subscribe((platos: any)=>{
        this.platos=platos;
        console.log(platos);
    })
  }

  //Utilizando el método del service por POST
  enviar(plato: Plato){ //Lo recibe desde el $event --->Equipo
    this.estado=true;
      this.platoService.savePlato(plato).subscribe((respuesta: any)=>{
      console.log(respuesta)
      this.mensaje=respuesta.mensaje
      this.traerPlatos();
      this.estado=false;
    })
    }
    
  editar(plato:Plato){
    this.auxPlato=plato;
  }

  
  editarBtn(t:string){
    this.lable=t;
    
  }

  eliminarPlato(plato:Plato){
    this.estado=true;
    this.platoService.deletePlato(plato.id).subscribe((result: any)=>{
      this.mensaje=result.mensaje
      this.traerPlatos();
    })
  }

}
