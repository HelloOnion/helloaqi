import { AQIData, Theme } from "../types/aqi";
import styles from "./PollutantGrid.module.css";

interface PollutantGridProps {
  aqiData: AQIData;
  theme: Theme;
}

export const PollutantGrid = ({ aqiData, theme }: PollutantGridProps) => (
  <div className={styles.container}>
    <h2>Pollutants</h2>
    <div className={styles.grid}>
      {Object.entries({
        "PM2.5": aqiData.data.iaqi.pm25?.v,
        PM10: aqiData.data.iaqi.pm10?.v,
        O3: aqiData.data.iaqi.o3?.v,
        NO2: aqiData.data.iaqi.no2?.v,
        SO2: aqiData.data.iaqi.so2?.v,
        CO: aqiData.data.iaqi.co?.v,
      }).map(([key, value]) => (
        <div key={key}>
          <h3 style={{ color: theme.text }}>{key}:</h3>
          <p
            className={styles.pollutantValue}
            style={{ color: theme.secondary }}
          >
            {value || "N/A"}
          </p>
        </div>
      ))}
    </div>
  </div>
);
