export interface Location {
  name: string;
  latitude: number;
  longitude: number;
  country_code?: string;
  country?: string;
  timezone?: string;
  admin1?: string;
}

export interface LocationSearchResult {
  searchLocations: Location[];
}
