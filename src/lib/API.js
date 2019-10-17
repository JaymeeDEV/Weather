const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=7778677&units=metric&APPID=948b5e1ed61d472fb20ce3063bccfe06';

function getWeather() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default { getWeather };
