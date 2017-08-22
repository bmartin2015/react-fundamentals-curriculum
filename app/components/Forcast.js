import React, { Component } from 'react';

import DayContainer from './DayContainer';
import Loading from './Loading';

import api from '../utils/api';
import convert from '../utils/convert';

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

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(day) {
    console.log(day);
    this.props.history.push({
      pathname: `/details/${this.state.cityName}`,
      state: day
    });
  }

  render() {
    const loading = this.state.loading;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1 className="forcast-header">
            {this.state.cityName}, {this.state.cityCountry}
          </h1>
        </div>
        <div className="row">
          {this.state.fiveDayForcast.map(day => {
            return (
              <DayContainer
                key={day.dt}
                onClick={this.handleClick.bind(this, day)}
                dt={day.dt}
                icon={day.weather[0].icon}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forcast;
