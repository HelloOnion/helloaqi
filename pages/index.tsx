import { useEffect, useState } from "react";
import { getAQI, searchCity } from "../api/api";
import { themes } from "../config/theme";
import { getAQILevel, extractCityName } from "../utils/aqi";
import { SearchBar } from "../components/SearchBar";
import { PollutantGrid } from "../components/PollutantGrid";
import type { AQIData } from "../types/aqi";
import styles from "./index.module.css";

export default function Popup() {
  const [aqiData, setAqiData] = useState<AQIData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const currentTheme = isDark ? themes.dark : themes.light;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const data = await searchCity(searchQuery);
      setAqiData(data);
      setError("");
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAQI = async () => {
      setLoading(true);
      try {
        const data = await getAQI();
        setAqiData(data);
      } catch (err) {
        setError("Failed to fetch AQI data");
      } finally {
        setLoading(false);
      }
    };

    fetchAQI();
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
      }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Air Quality Index</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className={styles.themeToggle}
        >
          {isDark ? "🌙" : "🌞"}
        </button>
      </div>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        theme={currentTheme}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {aqiData && (
        <div>
          <h2 className={styles.cityName}>
            {extractCityName(aqiData.data.city.name)}
          </h2>
          <div
            className={styles.aqiBox}
            style={{
              backgroundColor: getAQILevel(aqiData.data.aqi).color,
            }}
          >
            <div className={styles.aqiValue}>{aqiData.data.aqi}</div>
            <div>{getAQILevel(aqiData.data.aqi).level}</div>
          </div>

          <PollutantGrid aqiData={aqiData} theme={currentTheme} />
        </div>
      )}

      <div className={styles.footer}>
        Created by:{" "}
        <a
          href="https://codykung.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Cody Kung
        </a>
      </div>
    </div>
  );
}
