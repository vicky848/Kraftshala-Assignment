import React from 'react';
import './index.css'; // Assuming this file contains your CSS styles

const WeatherDisplay = ({ weather }) => {
  const { name, temperature, location, date } = weather;

  return (
    <div className='card-container'>
      <div className='card'>
        <h3 className='text-header'>{name}</h3>
        <p className='text'>Temperature: {temperature} °C</p>
        <p className='text'>Date: {date}</p>
        <p className='text'>Location: {location}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
