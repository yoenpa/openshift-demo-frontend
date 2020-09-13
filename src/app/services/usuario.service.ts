import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from '../components/interfaces/usuario.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  urlGetUsuarios = 'http://demobackend-env.eba-phfuxkz4.us-east-1.elasticbeanstalk.com/rest/usuarios';
  urlGetUsuario = 'http://demobackend-env.eba-phfuxkz4.us-east-1.elasticbeanstalk.com/rest/usuario';
  urlGetLogin = 'http://demobackend-env.eba-phfuxkz4.us-east-1.elasticbeanstalk.com/rest/login'

  constructor( private http: Http ) { }

  getUsuariosService(){
    return this.http.get( this.urlGetUsuarios)
            .map( res => {
                return res.json();
            });
  }

  getUsuarioService(key$: string){
    const url = `${ this.urlGetUsuario }/${ key$ }`;
    console.log(url);
    return this.http.get( url )
      .map( res => res.json() );
  }

  setUsuarioService(data$: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlGetUsuarios, data$, options)
      .map(res => {res.text})
  }

  setLoginService(data$: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlGetLogin, data$, options)
      .map(res => {res.text})
  }

}
