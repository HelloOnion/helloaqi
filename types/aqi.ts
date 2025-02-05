export interface AQIData {
  data: {
    aqi: number;
    city: {
      name: string;
    };
    iaqi: {
      pm25: { v: number };
      pm10: { v: number };
      o3: { v: number };
      no2: { v: number };
      so2: { v: number };
      co: { v: number };
    };
  };
}

export interface Theme {
  bg: string;
  text: string;
  secondary: string;
  input: string;
}

export interface Themes {
  dark: Theme;
  light: Theme;
}
