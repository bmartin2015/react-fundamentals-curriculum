import React, { Component } from 'react';

import convert from '../utils/convert';

const DayContainer = props => {
  return (
    <div className="dayContainer" onClick={props.onClick}>
      <img src={`../app/images/weather-icons/${props.icon}.svg`} className="weather" />
      <p>
        {convert.convertDateTime(props.dt)}
      </p>
    </div>
  );
};

export default DayContainer;
