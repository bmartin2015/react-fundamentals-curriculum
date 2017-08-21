import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: this.props.cityName
    };

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.cityName);
  }

  render() {
    return (
      <div className="city-container" style={{ flexDirection: this.props.direction }}>
        <input className="form-control" placeholder="Austin, Texas" type="text" onChange={this.handleInput} />
        <button type="button" style={{ margin: 10 }} className="btn btn-success" onClick={this.handleClick}>
          Get Weather
        </button>
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
