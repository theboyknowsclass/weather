"use client";

import { useQuery } from "@apollo/client";
import { GET_FORECAST } from "../../../services/queries";
import { ForecastData } from "../../../types/forecast";
import { useForecastStore } from "../../../store/forecastStore";
import { useEffect } from "react";

interface UseForecastProps {
  latitude: number;
  longitude: number;
}

export const useForecast = ({ latitude, longitude }: UseForecastProps) => {
  const { setForecast, setLoading, setError } = useForecastStore();

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery<ForecastData>(GET_FORECAST, {
    variables: { latitude, longitude },
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  useEffect(() => {
    setLoading(queryLoading);
    setError(queryError || null);
    if (data?.getWeatherForecast) {
      setForecast(data.getWeatherForecast.daily);
    }
  }, [queryLoading, queryError, data, setLoading, setError, setForecast]);

  return {
    loading: queryLoading,
    error: queryError,
    forecast: data?.getWeatherForecast.daily || [],
  };
};
