import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from '../components/login/login.component'
import {ErrorComponent} from '../components/error/error.component'
import {BienvenidoComponent} from '../components/bienvenido/bienvenido.component'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ControlEntidadComponent } from '../components/control-entidad/control-entidad.component';
import {HttpClientModule} from '@angular/common/http';
import {CountriesService} from '../services/countries.service';
import { ListadoEntidadComponent } from '../components/listado-entidad/listado-entidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [MatButtonModule,MatSnackBarModule],
  providers: [CountriesService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
