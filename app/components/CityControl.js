import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../utils/api';

class CityControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: this.props.cityName
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const value = event.target.value;

    this.setState(() => {
      return {
        cityName: value
      };
    });
  }

  render() {
    return (
      <div className="city-container" style={{ flexDirection: this.props.direction }}>
        <input className="form-control" placeholder="Austin, Texas" type="text" onChange={this.handleInput} />
        <Link
          type="button"
          style={{ margin: 10 }}
          className="btn btn-success"
          to={`/forcast?city=${this.state.cityName}`}
        >
          Get Weather
        </Link>
      </div>
    );
  }
}

CityControl.propTypes = {
  direction: PropTypes.string.isRequired,
  cityName: PropTypes.string
};

CityControl.defaultProps = {
  direction: 'column',
  cityName: 'Austin'
};

export default CityControl;
