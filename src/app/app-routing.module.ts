
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {LoginComponent} from './components/login/login.component'
import {ErrorComponent} from './components/error/error.component'
import { BienvenidoComponent } from 'src/app/components/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from 'src/app/components/control-entidad/control-entidad.component';

const routes: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'bienvenido' , component: BienvenidoComponent},
    {path: 'paises/listado' , component: ControlEntidadComponent},
    {path: '**', component: ErrorComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }