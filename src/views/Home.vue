<template>
  <div class="home">
    <h2 class="mt-5 pt-5">Dublin</h2>
    <div class="row mt-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
    </div>
    <h2 class="mt-5 pt-3">Cork</h2>
    <div class="row mt-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
    </div>
    <h2 class="mt-5 pt-3">Galway</h2>
    <div class="row my-5 pt-5 text-center">
      <div class="col-md-2 col-md-offset-1"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><DublinForecast /></div>
      <div class="col-md-2"><GalwayForecast /></div>
      <div class="col-md-2"><CorkForecast /></div>
    </div>
  </div>
</template>
<script>
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
