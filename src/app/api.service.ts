import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alert, Dashboard, Countries, Country, Case, Article, ArticleSource, Image, Contact} from './api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://covid19.mathdro.id/api/';
  readonly NEWS_BASE_URL = 'https://covid19news.devs-cast.com/api/';

  constructor(private http: HttpClient) {
  }


  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.BASE_URL);
  }

  getDRCData(): Observable<Case> {
    return this.http.get<Case>(this.BASE_URL);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.NEWS_BASE_URL + 'articles');
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.NEWS_BASE_URL + 'images');
  }

  addContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.NEWS_BASE_URL + 'contacts', data);
  }

  addAlert(data: Alert): Observable<Alert> {
    return this.http.post<Alert>(this.NEWS_BASE_URL + 'alerts', data);
  }

  getSources(): Observable<ArticleSource[]> {
    return this.http.get<ArticleSource[]>(this.NEWS_BASE_URL + 'sources');
  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(this.BASE_URL + 'countries');
  }

  getCountry(name: string): Observable<Country> {
    return this.http.get<Country>(this.BASE_URL + `countries/${name}`);
  }

  getConfirmed(): Observable<Case[]> {
    return this.http.get<Case[]>(this.BASE_URL + 'confirmed');
  }
}
