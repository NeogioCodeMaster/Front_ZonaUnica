import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmLogin:FormGroup;
  validationMessage={
    username: [
      {type: 'required', message: 'El campo nombre es requerido'}
    ],
    password:[
      {type: 'required', message: 'El campo password es requerido'}
    ]
  }
  constructor(private fb: FormBuilder, private usuarioServ: UsuarioService, private router:Router) { 
    this.frmLogin=this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.usuarioServ.login(this.frmLogin.value).subscribe(result=>{
      this.router.navigateByUrl("sitios")
    })
  }

}
