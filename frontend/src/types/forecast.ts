export interface ForecastDay {
  date: string;
  temperature_2m_max: number;
  temperature_2m_min: number;
  precipitation_probability_max: number;
  wind_speed_10m_max: number;
  wind_gusts_10m_max: number;
  wind_direction_10m_dominant: number;
  snowfall_sum: number;
  uv_index_max: number;
  sunshine_duration: number;
  weather_code: number;
}

export interface ForecastData {
  getWeatherForecast: {
    daily: ForecastDay[];
  };
}

export type ActivityScore = {
  activity: string;
  score: number;
};
