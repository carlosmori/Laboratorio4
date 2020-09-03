
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {WelcomeComponent} from '../components/welcome/welcome.component'
import {LoginComponent} from '../components/login/login.component'
import {ErrorComponent} from '../components/error/error.component'

const routes: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'welcome' , component: WelcomeComponent},
    {path: '**', component: ErrorComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }