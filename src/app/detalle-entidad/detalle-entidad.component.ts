import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.scss']
})
export class DetalleEntidadComponent implements OnInit {
  @Input() paisSeleccionado: any;
  @Output() eliminarEntidad = new EventEmitter<any>();

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  llamarEliminarEntidad(){
    this.eliminarEntidad.emit(this.paisSeleccionado);
    this.paisSeleccionado = null;
    this._snackBar.open('Pais eliminado correctamente', 'Ok' , {
      duration: 4000,
    });
  }

}
