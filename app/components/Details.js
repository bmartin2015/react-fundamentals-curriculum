import React, { Component } from 'react';

import DayContainer from './DayContainer';

import api from '../utils/api';
import convert from '../utils/convert';
import Loading from './Loading';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: '',
      weather: '',
      minTemp: '',
      maxTemp: '',
      humidity: '',
      dt: '',
      icon: ''
    };
  }

  componentDidMount() {
    this.updateCity();
  }

  updateCity() {
    this.setState(() => {
      return {
        cityName: this.props.match.params.id,
        weather: this.props.history.location.state.weather[0].description,
        minTemp: this.props.history.location.state.temp.min,
        maxTemp: this.props.history.location.state.temp.max,
        humidity: this.props.history.location.state.humidity,
        dt: this.props.history.location.state.dt,
        icon: this.props.history.location.state.weather[0].icon
      };
    });
  }

  handleClick() {}

  render() {
    return (
      <div>
        <DayContainer dt={this.state.dt} icon={this.state.icon} onClick={this.handleClick} />
        <div className="details-container">
          <p>
            {this.state.cityName}
          </p>
          <p>
            {this.state.weather}
          </p>
          <p>
            min temp: {this.state.minTemp} degrees
          </p>
          <p>
            max temp: {this.state.maxTemp} degrees
          </p>
          <p>
            humidity: {this.state.humidity}
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
