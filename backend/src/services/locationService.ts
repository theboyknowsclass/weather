import fetch from "node-fetch";

export type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  timezone?: string;
  feature_code?: string;
  country_code?: string;
  country: string;
  country_id?: number;
  population?: number;
  postcodes?: string[];
  admin1?: string;
  admin1_id?: number;
  admin2?: string;
  admin2_id?: number;
  admin3?: string;
  admin3_id?: number;
  admin4?: string;
  admin4_id?: number;
};

interface GeocodingResponse {
  results?: Array<Location>;
}

export class LocationService {
  private readonly GEOCODING_API =
    "https://geocoding-api.open-meteo.com/v1/search";

  async searchLocations(name: string): Promise<Location[]> {
    const response = await fetch(
      `${this.GEOCODING_API}?name=${encodeURIComponent(name)}&count=10&language=en&format=json`
    );
    const data = (await response.json()) as GeocodingResponse;

    if (!data.results) {
      return [];
    }

    return data.results.map((result) => ({
      id: result.id,
      name: result.name,
      latitude: result.latitude,
      longitude: result.longitude,
      elevation: result.elevation,
      timezone: result.timezone,
      feature_code: result.feature_code,
      country_code: result.country_code,
      country: result.country,
      country_id: result.country_id,
      population: result.population,
      postcodes: result.postcodes,
      admin1: result.admin1,
      admin1_id: result.admin1_id,
      admin2: result.admin2,
      admin2_id: result.admin2_id,
      admin3: result.admin3,
      admin3_id: result.admin3_id,
      admin4: result.admin4,
      admin4_id: result.admin4_id,
    }));
  }
}
