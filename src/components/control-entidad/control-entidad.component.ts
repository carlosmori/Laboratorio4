import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/services/countries.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {
  paises: any[] = [];
  constructor(private countriesService:CountriesService) { }
  
  ngOnInit(): void {
    this.countriesService.listCountries$.subscribe(countries => this.paises = countries)
  }

}
