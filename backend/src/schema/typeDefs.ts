import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Coordinates {
    latitude: Float!
    longitude: Float!
  }

  type Location {
    id: Int!
    name: String!
    latitude: Float!
    longitude: Float!
    elevation: Float
    timezone: String
    feature_code: String
    country_code: String
    country: String
    country_id: Int
    population: Int
    postcodes: [String]
    admin1: String
    admin1_id: Int
    admin2: String
    admin2_id: Int
    admin3: String
    admin3_id: Int
    admin4: String
    admin4_id: Int
  }

  type DailyForecast {
    date: String!
    temperature_2m_max: Float!
    temperature_2m_mean: Float!
    temperature_2m_min: Float!
    apparent_temperature_max: Float!
    apparent_temperature_mean: Float!
    apparent_temperature_min: Float!
    precipitation_sum: Float!
    rain_sum: Float!
    showers_sum: Float!
    snowfall_sum: Float!
    precipitation_hours: Float!
    precipitation_probability_max: Float!
    precipitation_probability_mean: Float!
    precipitation_probability_min: Float!
    weather_code: Int!
    sunrise: String!
    sunset: String!
    sunshine_duration: Float!
    daylight_duration: Float!
    wind_speed_10m_max: Float!
    wind_gusts_10m_max: Float!
    wind_direction_10m_dominant: Float!
    shortwave_radiation_sum: Float!
    et0_fao_evapotranspiration: Float!
    uv_index_max: Float!
    uv_index_clear_sky_max: Float!
  }

  type WeatherForecast {
    location: Location!
    daily: [DailyForecast!]!
  }

  type Query {
    searchLocations(name: String!): [Location!]!
    getWeatherForecast(latitude: Float!, longitude: Float!): WeatherForecast!
  }
`;
