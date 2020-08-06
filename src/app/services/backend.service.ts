import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alert, Article, CongoCase, Contact, Image} from '../models/backend.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getCongoCase(): Observable<CongoCase> {
    return this.http.get<CongoCase>(`${environment.backendApiUrl}/cases/1`);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.backendApiUrl}/articles`);
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${environment.backendApiUrl}/images`);
  }

  addContact(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.backendApiUrl}/contacts`, data);
  }

  addAlert(data: Alert): Observable<Alert> {
    return this.http.post<Alert>(`${environment.backendApiUrl}/alerts`, data);
  }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(`${environment.backendApiUrl}/alerts`);
  }
}
