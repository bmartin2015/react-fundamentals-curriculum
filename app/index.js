import React from 'react';
import { render } from 'react-dom';

require('./index.css');

const App = () => {
  return <div>Hello World</div>;
};

render(<App />, document.getElementById('app'));
