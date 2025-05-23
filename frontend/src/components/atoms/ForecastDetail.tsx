import React from "react";
import styles from "./ForecastDetail.module.css";

interface ForecastDetailProps {
  label: string;
  value: string | number;
  unit?: string;
}

export const ForecastDetail: React.FC<ForecastDetailProps> = ({
  label,
  value,
  unit,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}:</span>
      <span className={styles.value}>
        {value}
        {unit}
      </span>
    </div>
  );
};
