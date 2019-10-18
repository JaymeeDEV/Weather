<template>
<div>
  <h1>{{ weatherCork.list[32].weather[0].description }}</h1>
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
  mounted() {
    API.getWeatherCork().then((result) => {
      this.weatherCork = result;
    });
  },
};
</script>
