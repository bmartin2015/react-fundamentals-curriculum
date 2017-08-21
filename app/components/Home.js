import React, { Component } from 'react';
import CityControl from './CityControl';

class Home extends Component {
  render() {
    return (
      <div className="body-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
        <h1 className="body-header">Enter a City and State</h1>
        <CityControl direction="column" />
      </div>
    );
  }
}

export default Home;
