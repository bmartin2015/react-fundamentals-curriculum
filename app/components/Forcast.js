import React, { Component } from 'react';

import api from '../utils/api';
import convert from '../utils/convert';
import Loading from './Loading';

const queryString = require('query-string');

class Forcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
      cityCountry: '',
      fiveDayForcast: null,
      loading: true
    };
  }

  componentDidMount() {
    const city = queryString.parse(this.props.location.search);

    api.fetchFiveDayForcast(city['city']).then(response => {
      console.log(response);
      this.setState(() => {
        return {
          cityName: response['city']['name'],
          cityCountry: response['city']['country'],
          fiveDayForcast: response['list'],
          loading: false
        };
      });
    });
  }

  render() {
    const loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div>
        <div className="row">
          <h1 className="forcast-header">
            {this.state.cityName}, {this.state.cityCountry}
          </h1>
        </div>
        <div className="row">
          {this.state.fiveDayForcast.map(day => {
            return (
              <p key={day.dt}>
                {convert.convertDateTime(day.dt)}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forcast;
