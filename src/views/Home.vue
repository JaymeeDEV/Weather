<template>
  <div class="home">
    <h1>Dashboard</h1>
    <pre>{{ forecast }}</pre>
  </div>
</template>
<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      forecast: {},
    };
  },
  mounted() {
    API.getForecast().then((result) => {
      this.forecast = result;
    });
  },
};
</script>
