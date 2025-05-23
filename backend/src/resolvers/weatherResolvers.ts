import { LocationService } from "../services/locationService";
import { ForecastService } from "../services/forecastService";
import { GraphQLResolveInfo } from "graphql";

const locationService = new LocationService();
const forecastService = new ForecastService();

export const resolvers = {
  Query: {
    searchLocations: async (
      _: unknown,
      { name }: { name: string },
      _context: unknown,
      _info: GraphQLResolveInfo
    ) => {
      return await locationService.searchLocations(name);
    },
    getWeatherForecast: async (
      _: unknown,
      { latitude, longitude }: { latitude: number; longitude: number },
      _context: unknown,
      _info: GraphQLResolveInfo
    ) => {
      const forecast = await forecastService.getWeatherForecast(
        latitude,
        longitude
      );

      // Transform the forecast data to match our GraphQL schema
      const daily = forecast.daily.time.map((date: string, index: number) => ({
        date,
        temperature_2m_max: forecast.daily.temperature_2m_max[index],
        temperature_2m_mean: forecast.daily.temperature_2m_mean[index],
        temperature_2m_min: forecast.daily.temperature_2m_min[index],
        apparent_temperature_max:
          forecast.daily.apparent_temperature_max[index],
        apparent_temperature_mean:
          forecast.daily.apparent_temperature_mean[index],
        apparent_temperature_min:
          forecast.daily.apparent_temperature_min[index],
        precipitation_sum: forecast.daily.precipitation_sum[index],
        rain_sum: forecast.daily.rain_sum[index],
        showers_sum: forecast.daily.showers_sum[index],
        snowfall_sum: forecast.daily.snowfall_sum[index],
        precipitation_hours: forecast.daily.precipitation_hours[index],
        precipitation_probability_max:
          forecast.daily.precipitation_probability_max[index],
        precipitation_probability_mean:
          forecast.daily.precipitation_probability_mean[index],
        precipitation_probability_min:
          forecast.daily.precipitation_probability_min[index],
        weather_code: forecast.daily.weathercode[index],
        sunrise: forecast.daily.sunrise[index],
        sunset: forecast.daily.sunset[index],
        sunshine_duration: forecast.daily.sunshine_duration[index],
        daylight_duration: forecast.daily.daylight_duration[index],
        wind_speed_10m_max: forecast.daily.wind_speed_10m_max[index],
        wind_gusts_10m_max: forecast.daily.wind_gusts_10m_max[index],
        wind_direction_10m_dominant:
          forecast.daily.wind_direction_10m_dominant[index],
        shortwave_radiation_sum: forecast.daily.shortwave_radiation_sum[index],
        et0_fao_evapotranspiration:
          forecast.daily.et0_fao_evapotranspiration[index],
        uv_index_max: forecast.daily.uv_index_max[index],
        uv_index_clear_sky_max: forecast.daily.uv_index_clear_sky_max[index],
      }));

      return {
        daily,
        location: {
          latitude,
          longitude,
        },
      };
    },
  },
};
