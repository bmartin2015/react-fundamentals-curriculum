import React, { Component } from 'react';
import CityControl from './CityControl';

class Nav extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>What's My Weather</h1>
        <CityControl direction="row" />
      </div>
    );
  }
}

export default Nav;
