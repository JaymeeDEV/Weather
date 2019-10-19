<template>
  <div class="home">
    <h2 class="mt-5 pt-5">Dublin</h2>
    <div class="row mt-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><DublinForecast :day='0' :date='0'/></div>
      <div class="col-md-2"><DublinForecast :day='8' :date='1'/></div>
      <div class="col-md-2"><DublinForecast :day='16' :date='2'/></div>
      <div class="col-md-2"><DublinForecast :day='24' :date='3'/></div>
      <div class="col-md-2"><DublinForecast :day='32' :date='4'/></div>
    </div>
    <h2 class="mt-5 pt-3">Cork</h2>
    <div class="row mt-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><CorkForecast :day='0' :date='0'/></div>
      <div class="col-md-2"><CorkForecast :day='8' :date='1'/></div>
      <div class="col-md-2"><CorkForecast :day='16' :date='2'/></div>
      <div class="col-md-2"><CorkForecast :day='24' :date='3'/></div>
      <div class="col-md-2"><CorkForecast :day='32' :date='4'/></div>
    </div>
    <h2 class="mt-5 pt-3">Galway</h2>
    <div class="row my-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><GalwayForecast :day='0' :date='0'/></div>
      <div class="col-md-2"><GalwayForecast :day='8' :date='1'/></div>
      <div class="col-md-2"><GalwayForecast :day='16' :date='2'/></div>
      <div class="col-md-2"><GalwayForecast :day='24' :date='3'/></div>
      <div class="col-md-2"><GalwayForecast :day='32' :date='4'/></div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import DublinForecast from '../components/DublinForecast.vue';
import CorkForecast from '../components/CorkForecast.vue';
import GalwayForecast from '../components/GalwayForecast.vue';

export default {
  name: 'home',
  components: {
    DublinForecast,
    CorkForecast,
    GalwayForecast,
  },
  data() {
    return {
      moment: { moment },
    };
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

.card{
  height:100%;
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
