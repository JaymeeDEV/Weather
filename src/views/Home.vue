<template>
  <div class="home jumbotron mt-5">
    <div class="row">
      <div class="col-6">
    <h2>Today</h2>
    <br/>
    <h3>{{ weather.list[0].dt_txt }}</h3>
    <h3>{{ weather.list[0].main.temp }}&#8451;</h3>
    <h3>{{ weather.list[0].weather[0].description }}</h3>
    <img v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png' "  />
  </div>
  <div class="col-6">
    <h2>Tomorrow</h2>
    <br/>
    <h3>{{ weather.list[8].dt_txt }}</h3>
    <h3>{{ weather.list[8].main.temp }}&#8451;</h3>
    <h3>{{ weather.list[8].weather[0].description }}</h3>
    <img v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[8].weather[8].icon + '@2x.png' "  />
</div>
</div>
</div>
</template>
<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      weather: {},
    };
  },
  mounted() {
    API.getWeather().then((result) => {
      this.weather = result;
    });
  },
};
</script>
<style>
h3{
  text-transform: capitalize;
}
</style>
