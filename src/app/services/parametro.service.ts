import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParametroService {

  urlGetCargos = 'http://pocdigital-route-pocdigital.cloudapps.linux.local/rest/parametros?numParametro=8';
  urlGetEstados = 'http://pocdigital-route-pocdigital.cloudapps.linux.local/rest/parametros?numParametro=7';

  constructor( private http: Http ) { }

  getCargosService(){
    return this.http.get( this.urlGetCargos )
      .map( res => res.json() );
  }

  getEstadosService(){
    return this.http.get( this.urlGetEstados )
      .map( res => res.json() );
  }
}
