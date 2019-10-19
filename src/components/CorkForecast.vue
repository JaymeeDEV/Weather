<template>
  <div class="card">
  <h4 class="card-title text-center pt-4">
    {{ new Date() | moment("add", [date]+" days", "Do MMM") }}
  </h4>
    <img class="card-img-top" :src="'http://openweathermap.org/img/wn/' + weatherCork.list[day].weather[0].icon + '@2x.png' " />
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ weatherCork.list[day].main.temp }}&#8451;</li>
        <li class="list-group-item">{{ weatherCork.list[day].weather[0].description }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'CorkForecast',
  data() {
    return {
      weatherCork: {},
    };
  },
  props: [
    'day',
    'date',
  ],
  mounted() {
    API.getWeatherCork().then((result) => {
      this.weatherCork = result;
    });
  },
};
</script>
