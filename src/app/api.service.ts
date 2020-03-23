import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as Model from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://covid19.mathdro.id/api/';
  readonly NEWS_BASE_URL = 'https://covid19news.devs-cast.com/api/';

  constructor(private http: HttpClient) {
  }


  getDashboard(): Observable<Model.Dashboard> {
    return this.http.get<Model.Dashboard>(this.BASE_URL);
  }

  getCongoCase(): Observable<Model.CongoCase> {
    return this.http.get<Model.CongoCase>(this.NEWS_BASE_URL + 'cases/1');
  }

  getArticles(): Observable<Model.Article[]> {
    return this.http.get<Model.Article[]>(this.NEWS_BASE_URL + 'articles');
  }

  getImages(): Observable<Model.Image[]> {
    return this.http.get<Model.Image[]>(this.NEWS_BASE_URL + 'images');
  }

  addContact(data: Model.Contact): Observable<Model.Contact> {
    return this.http.post<Model.Contact>(this.NEWS_BASE_URL + 'contacts', data);
  }

  addAlert(data: Model.Alert): Observable<Model.Alert> {
    return this.http.post<Model.Alert>(this.NEWS_BASE_URL + 'alerts', data);
  }

  getAlerts(): Observable<Model.Alert[]> {
    return this.http.get<Model.Alert[]>(this.NEWS_BASE_URL + 'alerts');
  }

  getCountries(): Observable<Model.Countries> {
    return this.http.get<Model.Countries>(this.BASE_URL + 'countries');
  }

  getCountry(name: string): Observable<Model.Country> {
    return this.http.get<Model.Country>(this.BASE_URL + `countries/${name}`);
  }

  getConfirmed(): Observable<Model.Case[]> {
    return this.http.get<Model.Case[]>(this.BASE_URL + 'confirmed');
  }
}
