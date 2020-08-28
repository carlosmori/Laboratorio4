import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  edad1: number = null;
  edad2: number = null;
  promedio: number = 0
  suma: number = 0;

  Calcular(){
    this.promedio = (+this.edad1 + +this.edad2) / 2;
    this.suma = +this.edad1 + +this.edad2;
  }
  Refrescar(){
    this.edad1 = null;
    this.edad2 = null;
    this.Calcular();
  }
}
