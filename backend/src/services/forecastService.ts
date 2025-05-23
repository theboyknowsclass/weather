import fetch from "node-fetch";
import { z } from "zod";

const WeatherForecastSchema = z.object({
  daily: z.object({
    time: z.array(z.string()),
    temperature_2m_max: z.array(z.number()),
    temperature_2m_mean: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),
    apparent_temperature_max: z.array(z.number()),
    apparent_temperature_mean: z.array(z.number()),
    apparent_temperature_min: z.array(z.number()),
    precipitation_sum: z.array(z.number()),
    rain_sum: z.array(z.number()),
    showers_sum: z.array(z.number()),
    snowfall_sum: z.array(z.number()),
    precipitation_hours: z.array(z.number()),
    precipitation_probability_max: z.array(z.number()),
    precipitation_probability_mean: z.array(z.number()),
    precipitation_probability_min: z.array(z.number()),
    weathercode: z.array(z.number()),
    sunrise: z.array(z.string()),
    sunset: z.array(z.string()),
    sunshine_duration: z.array(z.number()),
    daylight_duration: z.array(z.number()),
    wind_speed_10m_max: z.array(z.number()),
    wind_gusts_10m_max: z.array(z.number()),
    wind_direction_10m_dominant: z.array(z.number()),
    shortwave_radiation_sum: z.array(z.number()),
    et0_fao_evapotranspiration: z.array(z.number()),
    uv_index_max: z.array(z.number()),
    uv_index_clear_sky_max: z.array(z.number()),
  }),
});

export type WeatherForecast = z.infer<typeof WeatherForecastSchema>;

export class ForecastService {
  private readonly FORECAST_API = "https://api.open-meteo.com/v1/forecast";

  async getWeatherForecast(
    latitude: number,
    longitude: number
  ): Promise<WeatherForecast> {
    const params = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      daily: [
        "temperature_2m_max",
        "temperature_2m_mean",
        "temperature_2m_min",
        "apparent_temperature_max",
        "apparent_temperature_mean",
        "apparent_temperature_min",
        "precipitation_sum",
        "rain_sum",
        "showers_sum",
        "snowfall_sum",
        "precipitation_hours",
        "precipitation_probability_max",
        "precipitation_probability_mean",
        "precipitation_probability_min",
        "weathercode",
        "sunrise",
        "sunset",
        "sunshine_duration",
        "daylight_duration",
        "wind_speed_10m_max",
        "wind_gusts_10m_max",
        "wind_direction_10m_dominant",
        "shortwave_radiation_sum",
        "et0_fao_evapotranspiration",
        "uv_index_max",
        "uv_index_clear_sky_max",
      ].join(","),
      timezone: "auto",
    });

    const response = await fetch(`${this.FORECAST_API}?${params}`);
    const data = await response.json();

    return WeatherForecastSchema.parse(data);
  }
}
