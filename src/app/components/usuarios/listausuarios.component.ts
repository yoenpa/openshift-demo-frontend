import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './listausuarios.component.html'
})
export class ListaUsuariosComponent implements OnInit {

    usuarios: any[] = [];

    constructor(private _usuarioService: UsuarioService) {
        this._usuarioService.getUsuariosService().subscribe(data => {
            this.usuarios = data;
        });
    }

    ngOnInit() {
    }

    getUsuarios() {
        this._usuarioService.getUsuariosService().subscribe(data => {
            this.usuarios = data;
        });
    }
}