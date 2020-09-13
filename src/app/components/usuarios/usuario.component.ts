import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { ParametroService } from '../../services/parametro.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  public usuario:Usuario = {
    userName: '',
    run: '',
    nombre: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
  };

  mensaje = '';

  nuevo = false;
  id: string;

  constructor(private _usuarioService: UsuarioService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.params
      .subscribe( parametros => {
        this.id = parametros['id'];
        if ( this.id !== 'nuevo' ){
          this._usuarioService.getUsuarioService( this.id )
            .subscribe( data => this.usuario = data );
        }
      });
  }

  guardar() {
    this._usuarioService.setUsuarioService(JSON.stringify(this.usuario))
      .subscribe(result => {
        console.log("Resultado " + result);
      },
        error => {
          console.log("Error: " + error);
          this.mensaje = "Usuario ya existe";
        },
        () => {
          this.router.navigate(['/listausuarios']);
        });
  }

  ngOnInit() {
  }
}
