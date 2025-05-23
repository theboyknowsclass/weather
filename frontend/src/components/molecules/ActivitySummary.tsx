import React from "react";
import { ForecastDay } from "../../types/forecast";
import { getActivityScores } from "@/utils/activityRanking";
import styles from "./ActivitySummary.module.css";

interface ActivitySummaryProps {
  forecast: ForecastDay[];
}

export const ActivitySummary: React.FC<ActivitySummaryProps> = ({
  forecast,
}) => {
  // Calculate average scores for each activity
  const averageScores = forecast.reduce((acc, day) => {
    const dayScores = getActivityScores(day);
    dayScores.forEach(({ activity, score }) => {
      if (!acc[activity]) {
        acc[activity] = { total: 0, count: 0 };
      }
      acc[activity].total += score;
      acc[activity].count += 1;
    });
    return acc;
  }, {} as Record<string, { total: number; count: number }>);

  // Convert to array and calculate averages
  const rankedActivities = Object.entries(averageScores)
    .map(([activity, { total, count }]) => ({
      activity,
      score: Math.round(total / count),
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>7-Day Activity Summary</h2>
      <div className={styles.scores}>
        {rankedActivities.map(({ activity, score }) => (
          <div key={activity} className={styles.scoreItem}>
            <span className={styles.activityName}>{activity}</span>
            <span className={styles.score}>{score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
