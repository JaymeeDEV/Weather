<template>
  <div class="home">
    <div class="row mt-5">
      <div class="col-4">
<div class="card" style="width: 75%;">
  <h4 class="card-title text-center pt-4">Today</h4>
  <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[0].weather[0].icon + '@2x.png' " />
  <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ weather.list[0].dt_txt }}</li>
    <li class="list-group-item">{{ weather.list[0].main.temp }}&#8451;</li>
    <li class="list-group-item">{{ weather.list[0].weather[0].description }}</li>
  </ul>
</div>
</div>
</div>
<div class="col-4">
<div class="card" style="width: 75%;">
  <h4 class="card-title text-center pt-4">Tomorrow</h4>
  <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[8].weather[0].icon + '@2x.png' " />
  <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ weather.list[8].dt_txt }}</li>
    <li class="list-group-item">{{ weather.list[8].main.temp }}&#8451;</li>
    <li class="list-group-item">{{ weather.list[8].weather[0].description }}</li>
  </ul>
</div>
</div>
</div>
<div class="col-4">
<div class="card" style="width: 75%;">
  <h4 class="card-title text-center pt-4">Day 3</h4>
  <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[8].weather[0].icon + '@2x.png' " />
  <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ weather.list[16].dt_txt }}</li>
    <li class="list-group-item">{{ weather.list[16].main.temp }}&#8451;</li>
    <li class="list-group-item">{{ weather.list[16].weather[0].description }}</li>
  </ul>
</div>
</div>
</div>
</div>
<div class="row">
  <div class="col-6">
  <div class="card" style="width: 50%;">
    <h4 class="card-title text-center pt-4">Day 4</h4>
    <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[8].weather[0].icon + '@2x.png' " />
    <div class="card-body">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ weather.list[24].dt_txt }}</li>
      <li class="list-group-item">{{ weather.list[24].main.temp }}&#8451;</li>
      <li class="list-group-item">{{ weather.list[24].weather[0].description }}</li>
    </ul>
  </div>
  </div>
  </div>
  <div class="col-6">
  <div class="card" style="width: 50%;">
    <h4 class="card-title text-center pt-4">Day 5</h4>
    <img class="card-img-top" v-bind:src="'http://openweathermap.org/img/wn/' + weather.list[8].weather[0].icon + '@2x.png' " />
    <div class="card-body">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ weather.list[32].dt_txt }}</li>
      <li class="list-group-item">{{ weather.list[32].main.temp }}&#8451;</li>
      <li class="list-group-item">{{ weather.list[32].weather[0].description }}</li>
    </ul>
  </div>
  </div>
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
li{
  text-transform: capitalize;
}
</style>
