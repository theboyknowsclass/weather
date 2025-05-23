import styles from "./Forecast.module.css";
import { DayForecast } from "../../molecules/DayForecast";
import { ActivitySummary } from "../../molecules/ActivitySummary";
import { useForecast } from "./useForecast";
import { ForecastDay } from "@/types/forecast";

interface ForecastProps {
  latitude: number;
  longitude: number;
}

export const Forecast: React.FC<ForecastProps> = ({ latitude, longitude }) => {
  const { loading, error, forecast } = useForecast({
    latitude,
    longitude,
  });

  if (loading) return <div>Loading forecast...</div>;
  if (error) return <div>Error loading forecast: {error.message}</div>;

  return (
    <div className={styles.forecastPage}>
      <ActivitySummary forecast={forecast} />
      <div className={styles.forecastGrid}>
        {forecast.map((day: ForecastDay) => (
          <div key={day.date} className={styles.forecastDay}>
            <DayForecast day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};
