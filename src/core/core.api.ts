export const API = {
  WEATHER: {
    KEY: "81d04054fee49a4bce8a1b367fbc8c6b",
    URL_BASE: "https://api.openweathermap.org/data/2.5/",
  },
};

export const a = {
  coord: {
    lon: 105.8412,
    lat: 21.0245,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 14,
    feels_like: 12.84,
    temp_min: 14,
    temp_max: 14,
    pressure: 1025,
    humidity: 53,
    sea_level: 1025,
    grnd_level: 1024,
  },
  visibility: 10000,
  wind: {
    speed: 1.42,
    deg: 6,
    gust: 0.94,
  },
  clouds: {
    all: 35,
  },
  dt: 1640746578,
  sys: {
    type: 1,
    id: 9308,
    country: "VN",
    sunrise: 1640734350,
    sunset: 1640773462,
  },
  timezone: 25200,
  id: 1581130,
  name: "Hanoi",
  cod: 200,
};
