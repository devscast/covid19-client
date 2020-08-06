export interface Detail {
  value: number;
  detail: string;
}

export interface Case {
  url: string;
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
  combinedKey: string;
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
  deltaRecovered?: number;
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
