<template>
  <div class="home">
    <h3>Daily</h3>
    <br/>
    <p>{{ weather.list[0].dt_txt }}</p>
    <p>{{ weather.list[0].main.temp }}</p>
    <p>{{ weather.list[0].weather[0].description }}</p>
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
    <p>{{ weather.list[0].weather[0].icon }}</p>
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
p{
  text-transform: capitalize;
}
</style>
