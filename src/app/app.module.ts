import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WelcomeComponent} from '../components/welcome/welcome.component'
import {LoginComponent} from '../components/login/login.component'
import {ErrorComponent} from '../components/error/error.component'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
