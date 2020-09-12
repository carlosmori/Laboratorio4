import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/services/countries.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {
  
  // Endpoint https://api.mocki.io/v1/70f1d78a cread con https://mocki.io/
  // Api original de la cual mockee la respuesta https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag
  
  paises: any[] = [];
  paisesEliminados: any[] = [];
  paisSeleccionado: any = null;

  constructor(private countriesService:CountriesService) { }
  
  ngOnInit(): void {
    this.countriesService.listCountries$.subscribe(countries => this.paises = countries)
  }
  abrirDetalle(pais){
    this.paisSeleccionado = pais;
  }
  eliminarPais(pais){
    const {name} = pais;
    this.paisesEliminados = [...this.paisesEliminados, pais];
    console.log(this.paisesEliminados)
    this.paises = this.paises.filter(pais => pais.name !== name)
  }

}
