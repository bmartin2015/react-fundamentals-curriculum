import React, { Component } from 'react';
import CityControl from './CityControl';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="body-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
          <h1 className="body-header">Enter a City and State</h1>
          <CityControl direction="column" />
        </div>
      </div>
    );
  }
}

export default App;
