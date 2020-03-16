import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard, Countries, Country } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://covid19.mathdro.id/api/';

  static readonly SUMMARY_IMAGE = 'https://covid19.mathdro.id/api/og';

  constructor(private http: HttpClient) { }


  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.BASE_URL);
  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(this.BASE_URL + '/countries')
  }

  getCountry(name: string): Observable<Country> {
    return this.http.get<Country>(this.BASE_URL + `/countries/${name}`);
  }
}
