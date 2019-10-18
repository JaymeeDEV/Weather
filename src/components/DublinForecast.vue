<template>
  <div class="card">
    <h4 class="card-title text-center pt-4">Day 6</h4>
    <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weatherDublin.list[32].weather[0].icon + '@2x.png' " />
    <div class="card-body">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ weatherDublin.list[32].dt_txt }}</li>
      <li class="list-group-item">{{ weatherDublin.list[32].main.temp }}&#8451;</li>
      <li class="list-group-item">{{ weatherDublin.list[32].weather[0].description }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'DublinForecast',
  data() {
    return {
      weatherDublin: {},
    };
  },
  mounted() {
    API.getWeatherDublin().then((result) => {
      this.weatherDublin = result;
    });
  },
};
</script>
