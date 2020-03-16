
export interface Detail {
    value: Number;
    defail: string;
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
    lastUpdate: Number;
    lat: Number;
    long: Number;
    confirmed: Number;
    recovered: Number;
    deaths: Number;
    active: Number;
    admin2?: any;
    fips?: any;
    combinedKey?: null;
    iso2: string;
    iso3: string;
}

export interface DailyReport {
    reportDate: Number;
    reportDateString: string;
    mainlandChina: Number;
    otherLocations: Number;
    totalConfirmed?: Number;
    totalRecovered?: Number;
    deltaConfirmed: Number;
    deltaRecoverred?: Number;
    objectid: Number;
}

export interface Countries {
    countries: object;
    iso3: object;
}

export interface Country {
    confirmed: Detail;
    recovered: Detail;
    deaths: Detail;
    lastUpdate: string;
}
