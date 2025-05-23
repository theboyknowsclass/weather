import { gql } from "@apollo/client";

export const SEARCH_LOCATIONS = gql`
  query SearchLocations($name: String!) {
    searchLocations(name: $name) {
      name
      latitude
      longitude
      country_code
      country
      timezone
      admin1
    }
  }
`;

export const GET_FORECAST = gql`
  query GetForecast($latitude: Float!, $longitude: Float!) {
    getWeatherForecast(latitude: $latitude, longitude: $longitude) {
      daily {
        date
        temperature_2m_max
        temperature_2m_min
        precipitation_probability_max
        wind_speed_10m_max
        wind_gusts_10m_max
        wind_direction_10m_dominant
        snowfall_sum
        uv_index_max
        sunshine_duration
        weather_code
      }
    }
  }
`;
