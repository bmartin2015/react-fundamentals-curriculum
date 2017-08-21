import React, { Component } from 'react';

import api from '../utils/api';
import Loading from './Loading';

const queryString = require('query-string');

class Forcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
      currentWeather: null,
      fiveDayForcast: null,
      loading: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const city = queryString.parse(this.props.location.search);

    console.log(city);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.cityName);
    api.fetchCurrentWeather(this.state.cityName).then(response => {
      console.log(response);
    });
  }

  render() {
    const loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    return <p>Forcast Page</p>;
  }
}

export default Forcast;
