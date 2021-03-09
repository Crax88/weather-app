const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query, lang) => {
  const url = `${baseUrl}?q=${query}&units=metric&appid=${API_KEY}&lang=${
    lang === "ru" ? "ru" : "en"
  }`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status !== 200) throw new Error(data.message);
    return data;
  } catch (err) {
    return err.message;
  }
};
