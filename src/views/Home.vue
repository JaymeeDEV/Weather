<template>
  <div class="home">
    <div class="row mt-5 pt-5 text-center">
      <DublinForecast day="1"/>
    </div>
  </div>
</template>
<script>
import API from '@/lib/API';
import DublinForecast from '../components/DublinForecast.vue';

export default {
  name: 'home',
  components: {
    DublinForecast,
  },
  data() {
    return {
      weatherDublin: {},
      weatherCork: {},
    };
  },
  mounted() {
    API.getWeatherDublin().then((result) => {
      this.weatherDublin = result;
    });
    API.getWeatherCork().then((result) => {
      this.weatherCork = result;
    });
  },
};
</script>
<style>
*{
  font-family: 'Comfortaa', cursive;
}
li{
  text-transform: capitalize;
}

header {
  position:fixed;
  left:0;
  top:0;
  width:100vw;
  z-index:200;
  height:100px;
}
</style>
