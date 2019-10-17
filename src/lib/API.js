const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6df551e0aa00d792e57c5b52ee7e8702';

function getForecast() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default { getForecast };
