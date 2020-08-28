import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WelcomeComponent} from '../components/welcome/welcome.component'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
