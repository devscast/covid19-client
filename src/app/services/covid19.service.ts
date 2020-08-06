import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Case, Countries, Country} from '../models/covid19.model';
import {Dashboard} from '../models/backend.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(`${environment.covidApiUrl}/countries`);
  }

  getCountry(name: string): Observable<Country> {
    return this.http.get<Country>(`${environment.covidApiUrl}/countries/${name}`);
  }

  getConfirmed(): Observable<Case[]> {
    return this.http.get<Case[]>(`${environment.covidApiUrl}/confirmed`);
  }

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(environment.covidApiUrl);
  }
}
