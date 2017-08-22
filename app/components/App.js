import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CityControl from './CityControl';
import Forcast from './Forcast';
import Home from './Home';
import Nav from './Nav';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forcast" component={Forcast} />
            <Route path="/details/:id" component={Details} />
            <Route
              render={() => {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
