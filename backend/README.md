# Weather Backend

This is a Node.js + TypeScript backend providing a GraphQL API for:
- Searching for cities/towns using the Open-Meteo Geocoding API
- Fetching a 7-day weather forecast for a specific location using the Open-Meteo Forecast API

## Prerequisites
- Node.js (v18 or higher recommended)
- npm

## Install dependencies
```bash
npm install
```

## Development (hot reload)
```bash
npm run dev
```

## Build for production
```bash
npm run build
```

## Start production server
```bash
npm start
```

## Lint the code
```bash
npm run lint
```

## Format the code
```bash
npm run format
```

## GraphQL Playground
Once running (dev or prod), access the GraphQL Playground at:

```
http://localhost:4000/
```

## Example Queries

### Search for Locations
```graphql
query SearchLocations {
  searchLocations(name: "London") {
    id
    name
    latitude
    longitude
    country
    admin1
    admin2
    admin3
  }
}
```

### Get 7-Day Weather Forecast
```graphql
query GetWeatherForecast {
  getWeatherForecast(latitude: 51.5074, longitude: -0.1278) {
    location {
      latitude
      longitude
    }
    daily {
      date
      temperature_2m_max
      temperature_2m_mean
      temperature_2m_min
      apparent_temperature_max
      apparent_temperature_mean
      apparent_temperature_min
      precipitation_sum
      rain_sum
      showers_sum
      snowfall_sum
      precipitation_hours
      precipitation_probability_max
      precipitation_probability_mean
      precipitation_probability_min
      weather_code
      sunrise
      sunset
      sunshine_duration
      daylight_duration
      wind_speed_10m_max
      wind_gusts_10m_max
      wind_direction_10m_dominant
      shortwave_radiation_sum
      et0_fao_evapotranspiration
      uv_index_max
      uv_index_clear_sky_max
    }
  }
}
```

## Project Structure
- `src/services/locationService.ts` — Handles geocoding/location search
- `src/services/forecastService.ts` — Handles weather forecast retrieval
- `src/resolvers/weatherResolvers.ts` — GraphQL resolvers
- `src/schema/typeDefs.ts` — GraphQL schema
- `src/index.ts` — Server entry point

## Notes
- Uses Apollo Server v4
- Uses Zod for runtime validation
- Uses node-fetch for HTTP requests

---
For more info on the APIs used, see [Open-Meteo API Docs](https://open-meteo.com/en/docs) 