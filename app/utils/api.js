import axios from 'axios';

const appid = '03d47f1dc928bc2fced2c23460d61aa5';

module.exports = {
  fetchCurrentWeather: city => {
    const encodedURI = window.encodeURI(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${appid}`
    );

    return axios.get(encodedURI).then(response => {
      return response.data;
    });
  },

  fetchFiveDayForcast: city => {
    const encodedURI = window.encodeURI(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${appid}&cnt=5`
    );

    return axios.get(encodedURI).then(response => {
      return response.data;
    });
  }
};
