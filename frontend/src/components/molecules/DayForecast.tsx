import React from "react";
import { ForecastDetail } from "../atoms/ForecastDetail";
import { ForecastDay, ActivityScore } from "../../types/forecast";
import styles from "./DayForecast.module.css";
import { getActivityScores } from "@/utils/activityRanking";

interface DayForecastProps {
  day: ForecastDay;
}

export const DayForecast: React.FC<DayForecastProps> = ({ day }) => {
  const {
    date,
    temperature_2m_max,
    temperature_2m_min,
    precipitation_probability_max,
    wind_speed_10m_max,
    wind_gusts_10m_max,
    wind_direction_10m_dominant,
    snowfall_sum,
    uv_index_max,
    sunshine_duration,
  } = day;

  const activityScores = getActivityScores(day);

  return (
    <div className={styles.container}>
      <h3 className={styles.date}>
        {new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </h3>
      <div className={styles.details}>
        <ForecastDetail label="High" value={temperature_2m_max} unit="°C" />
        <ForecastDetail label="Low" value={temperature_2m_min} unit="°C" />
        <ForecastDetail
          label="Precip"
          value={precipitation_probability_max}
          unit="%"
        />
        <ForecastDetail label="Wind" value={wind_speed_10m_max} unit=" km/h" />
        <ForecastDetail label="Gusts" value={wind_gusts_10m_max} unit=" km/h" />
        <ForecastDetail
          label="Dir"
          value={wind_direction_10m_dominant}
          unit="°"
        />
        <ForecastDetail label="Snow" value={snowfall_sum} unit="mm" />
        <ForecastDetail label="UV" value={uv_index_max} />
        <ForecastDetail
          label="Sun"
          value={Math.round(sunshine_duration / 3600)}
          unit="h"
        />
      </div>
      <div className={styles.activitySection}>
        <h4 className={styles.activityHeader}>Activity Scores</h4>
        <ul className={styles.activityList}>
          {activityScores
            .sort((a, b) => b.score - a.score)
            .map(({ activity, score }: ActivityScore) => (
              <li key={activity} className={styles.activityItem}>
                <span className={styles.activityName}>{activity}:</span>
                <span className={styles.activityScore}>{score}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
