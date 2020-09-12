import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.scss']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() listaPaises: any[];
  @Output() paisSeleccionado = new EventEmitter<any>();
  @Input() title:string;
  displayedColumns: string[] = ['nombre', 'accion'];
  constructor() { }

  ngOnInit(): void {
  }
  abrirDetalle(pais:any){
    this.paisSeleccionado.emit(pais)
  }
}
