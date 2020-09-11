import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  listCountries$ = this.http
  .get<any[]>("https://api.mocki.io/v1/7707db24")
}
