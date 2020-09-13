import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

 
  router: Router;
  usuarios:any[] = [];
  mensaje = '';

  public usuario:Usuario = {
    userName: '',
    run: '',
    nombre: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: ''
  };


    constructor(private _usuarioService:UsuarioService, private _router: Router) 
    {
      this.router = _router;
    }



  ngOnInit() {
  }

  getUsuarios(){
    this._usuarioService.getUsuariosService().subscribe(data =>{
      this.usuarios = data;
    });
  }

  login() {
    this._usuarioService.setLoginService(JSON.stringify(this.usuario)).subscribe(result => {
          console.log("Resultado " + result);
        },
        error => {
          console.log("Error: " + error);
          this.mensaje = "Usuario o contraseña incorrectos"; 
        },
        () => {
          this.router.navigate(['/listausuarios']);
        });
  }
}

