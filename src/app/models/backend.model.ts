import {Detail} from './covid19.model';
import {SafeResourceUrl} from '@angular/platform-browser';

export interface CongoCase {
  confirmed: string;
  recovered: string;
  deaths: string;
}

export interface Article {
  name: string | SafeResourceUrl;
  link: string;
  type: string;
  image?: string;
  publishedAt: string;
}

export interface ArticleSource {
  name: string;
  link: string;
}

export interface Image {
  name: string;
  link: string;
}

export interface Dashboard {
  confirmed: Detail;
  recovered: Detail;
  deaths: Detail;
  dailySummary: string;
  dailyTimeSeries: object;
  image: string;
  source: string;
  countries: string;
  countriesDetail: {
    pattern: string;
    example: string;
  };
  lastUpdate: string;
}

export interface Contact {
  number: string;
  lang: string;
}

export interface Alert {
  lng: string;
  lat: string;
  age?: number;
  sex?: string;
  infos?: string;
  number: string;
  status?: string;
  symptoms: string;
  wellKnownCenter?: boolean;
  infectedRelatives?: boolean;
  gesturesBarriersLevel: number;
}
