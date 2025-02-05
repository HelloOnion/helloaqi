export const getAQILevel = (aqi: number) => {
  if (aqi <= 50) return { level: "Good", color: "#009966" };
  if (aqi <= 100) return { level: "Moderate", color: "#ffde33" };
  if (aqi <= 150)
    return { level: "Unhealthy for Sensitive Groups", color: "#ff9933" };
  if (aqi <= 200) return { level: "Unhealthy", color: "#cc0033" };
  if (aqi <= 300) return { level: "Very Unhealthy", color: "#660099" };
  return { level: "Hazardous", color: "#7e0023" };
};

export const extractCityName = (fullName: string) => {
  return fullName.split(/[,(]/)[0].trim();
};
