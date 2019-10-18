<template>
<div>
  <h1>{{ weatherGalway.list[32].weather[0].description }}</h1>
</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'GalwayForecast',
  data() {
    return {
      weatherGalway: {},
    };
  },
  mounted() {
    API.getWeatherGalway().then((result) => {
      this.weatherGalway = result;
    });
  },
};
</script>
