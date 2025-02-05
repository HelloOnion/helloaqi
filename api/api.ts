const AQI_URL = process.env.NEXT_PUBLIC_AQI_URL;
const AQI_TOKEN = process.env.NEXT_PUBLIC_AQI_TOKEN;

export const getAQI = async () => {
  if (!AQI_TOKEN) throw new Error("AQI_TOKEN is not defined");

  const response = await fetch(`${AQI_URL}${AQI_TOKEN}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const searchCity = async (city: string) => {
  if (!AQI_TOKEN) throw new Error("AQI_TOKEN is not defined");

  const response = await fetch(
    `https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=${AQI_TOKEN}`
  );
  const data = await response.json();

  if (data.status === "error") {
    throw new Error(data.data);
  }

  return data;
};
