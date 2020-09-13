import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { ListaUsuariosComponent } from './components/usuarios/listausuarios.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'parametros', component: ParametrosComponent },
  { path: 'listausuarios', component: ListaUsuariosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
