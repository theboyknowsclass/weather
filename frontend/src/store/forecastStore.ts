import { create } from "zustand";
import { ForecastDay } from "../types/forecast";

interface ForecastState {
  forecast: ForecastDay[];
  loading: boolean;
  error: Error | null;
  setForecast: (forecast: ForecastDay[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
}

export const useForecastStore = create<ForecastState>((set) => ({
  forecast: [],
  loading: false,
  error: null,
  setForecast: (forecast) => set({ forecast }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
