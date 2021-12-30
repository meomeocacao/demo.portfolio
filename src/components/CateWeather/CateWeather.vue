<template>
  <div :class="dailyMoment.background + ' ' + 'weather-background'">
    <div class="temperature">
      <h4>
        {{ upperCaseFirstLetter(weather.weather.weather[0].description) }}
      </h4>
      <h1>{{ weather.weather.name }}</h1>
      <h5>{{ dailyMoment.message }}</h5>
      <div>
        <v-icon name="ri-temp-hot-line" scale="3" />
        <p></p>
        <p>{{ Math.round(weather.weather.main.temp) }}℃</p>
      </div>
    </div>
    <div class="weather-information">
      <div class="search-box">
        <div>
          <v-icon name="io-search-circle" scale="2" />
          <input
            type="text"
            class="search-bar"
            placeholder="Search..."
            v-model="weather.query"
            @keypress="fetchWeather"
            @click="locatorButtonPressed"
          />
        </div>
        <p class="error-city" v-show="weather.error">{{ weather.error }}</p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { API, MESSAGE } from "@/core";
import { OpenWeather, WeatherMoment } from "@/interfaces/weather.interface";
import { defineComponent, onMounted } from "@vue/runtime-core";
import { reactive } from "vue";
export default defineComponent({
  name: "CateWeather",
  setup() {
    const dailyMoment = reactive({
      background: "Cloud",
      message: "Good Morning",
    });
    const weather = reactive<{
      error: string;
      query: string;
      weather: OpenWeather;
    }>({
      error: "",
      query: "",
      weather: {
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
        },
        visibility: 10000,
        wind: {
          speed: 1.42,
          deg: 6,
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
      },
    });
    onMounted(() => {
      const results = getCurrentMoment();
      Object.assign(dailyMoment, results);
    });

    const getCurrentMoment = (): { background: string; message: string } => {
      const hour = new Date().getHours();
      if ((hour < 5 && hour >= 0) || (hour > 20 && hour <= 24)) {
        return {
          background: WeatherMoment.MID_NIGHT,
          message: MESSAGE.MOMENT.NIGHT,
        };
      }
      if (hour < 10 && hour >= 5) {
        return {
          background: WeatherMoment.MORNING,
          message: MESSAGE.MOMENT.MORNING,
        };
      }
      if (hour < 13 && hour >= 10) {
        return {
          background: WeatherMoment.NOON,
          message: MESSAGE.MOMENT.AFTERNOON,
        };
      }
      if (hour < 18 && hour >= 13) {
        return {
          background: WeatherMoment.AFTERNOON,
          message: MESSAGE.MOMENT.AFTERNOON,
        };
      }
      return {
        background: WeatherMoment.EVENING,
        message: MESSAGE.MOMENT.AFTERNOON,
      };
    };
    return { weather, dailyMoment };
  },
  methods: {
    fetchWeather(e: any) {
      this.weather.error = "";
      if (e.key === "Enter") {
        fetch(
          `${API.WEATHER.URL_BASE}weather?q=${this.weather.query}&units=metric&APPID=${API.WEATHER.KEY}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results: OpenWeather) {
      console.log(results);

      if (results.message) {
        this.weather.error = results.message;
      } else {
        this.weather.weather = results;
        this.weather.error = "";
        this.dailyMoment.background = this.weather.weather.weather[0].main;
      }
    },
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    upperCaseFirstLetter(str: string): string {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    },
  },
});
</script>

<style lang="scss">
@import "../../assets/mixin";
.Clouds {
  @include background-weather($background-cloud);
}
.Rain {
  @include background-weather($background-rain);
}
.Clear {
  @include background-weather($background-morning);
}

.Midnight {
  @include background-weather($background-midnight);
}
.Morning {
  @include background-weather($background-morning);
}
.Noon {
  @include background-weather($background-noon);
}
.Afternoon {
  @include background-weather($background-afternoon);
}
.Evening {
  @include background-weather($background-evening);
}

.weather-information {
  text-align: start;
  width: fit-content;
  padding: 10px;
  margin: 10px;
  .search-box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  > div {
    .search-bar {
      padding: 10px;
      border-radius: 10px;
      &:focus {
        outline: none !important;
      }
    }
    > div {
      display: flex;
      align-items: center;
    }
  }
}

.error-city {
  color: red;
}

.temperature {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > h4 + h5 + h1 {
    margin: 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > p {
      font-size: 5rem;
      margin: 0;
    }
  }
  @include mobile {
    font-size: 2rem;
    width: 300px;
    margin-top: 15px;
  }
}
</style>
