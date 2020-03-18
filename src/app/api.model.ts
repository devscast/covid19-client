import {SafeResourceUrl} from '@angular/platform-browser';

export interface Detail {
  value: number;
  detail: string;
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

export interface Case {
  provinceState?: string;
  countryRegion: string;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
  admin2?: any;
  fips?: any;
  combinedKey?: null;
  iso2: string;
  iso3: string;
}

export interface DailyReport {
  reportDate: number;
  reportDateString: string;
  mainlandChina: number;
  otherLocations: number;
  totalConfirmed?: number;
  totalRecovered?: number;
  deltaConfirmed: number;
  deltaRecoverred?: number;
  objectid: number;
}

export interface Countries {
  countries: object;
  iso3: object;
}

export interface CountriesList {
  name: string;
  id: string;
}

export interface Country {
  confirmed: Detail;
  recovered: Detail;
  deaths: Detail;
  lastUpdate: string;
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
