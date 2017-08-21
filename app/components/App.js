import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Main.js Header</h1>
        </div>
        <div className="body-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
          <h1 className="body-header">Enter a City and State</h1>
          <div className="city-container" style={{ flexDirection: 'column' }}>
            <input className="form-control" placeholder="Austin, Texas" type="text" />
            <button type="button" style={{ margin: 10 }} className="btn btn-success">
              Get Weather
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
