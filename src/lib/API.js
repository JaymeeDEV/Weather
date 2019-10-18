const API_URL_DUBLIN = 'http://api.openweathermap.org/data/2.5/forecast?id=7778677&units=metric&APPID=948b5e1ed61d472fb20ce3063bccfe06';
const API_URL_CORK = 'http://api.openweathermap.org/data/2.5/forecast?id=2965140&units=metric&APPID=948b5e1ed61d472fb20ce3063bccfe06';
const API_URL_GALWAY = 'http://api.openweathermap.org/data/2.5/forecast?id=2964179&units=metric&APPID=948b5e1ed61d472fb20ce3063bccfe06';

function getWeatherDublin() {
  return fetch(API_URL_DUBLIN)
    .then(response => response.json());
}

function getWeatherCork() {
  return fetch(API_URL_CORK)
    .then(response => response.json());
}

function getWeatherGalway() {
  return fetch(API_URL_GALWAY)
    .then(response => response.json());
}

export default { getWeatherDublin, getWeatherCork, getWeatherGalway };
