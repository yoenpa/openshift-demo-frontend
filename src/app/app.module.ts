import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Servicios
import { UsuarioService } from './services/usuario.service';
import { ParametroService } from './services/parametro.service';

// Pipe
import { KeysPipe } from './pipes/keys.pipe';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { ListaUsuariosComponent } from './components/usuarios/listausuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    KeysPipe,
    UsuariosComponent,
    ParametrosComponent,
    PerfilesComponent,
    UsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UsuarioService,
    ParametroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
