import React, { useState, useEffect } from 'react';

import WeatherDisplay from '../WeatherDisplay';
import './index.css';



const SearchBar = () => {

  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetchWeatherData();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const handleChangeInput = (event) => {
    setLocation(event.target.value);
  }

  const fetchWeatherData = async () => {
    const apiKey = '23005a762b4e5c96b703986b00411efc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Weather data not available');
      }

      const data = await response.json();
      console.log("Received weather data:", data);

      setWeatherData({
        name: data.name,
        temperature: data.main.temp,
        date: new Date().toLocaleDateString(),
        location: data.name,
      });
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setError(error.message);
    }
  }

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    const fetchData = async () => {
      await fetchWeatherData();
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className='main-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-style'
          placeholder='Enter Location'
          value={location}
          onChange={handleChangeInput}
        />
        <button className='btn btn-primary mb-2' type='submit' >Get Weather</button>

        {weatherData ? (
          <WeatherDisplay weather={weatherData} />
        ) : (
          error ? (
            <p className='error-message'>{error}</p>
          ) : (
            <p>Loading...</p>
          )
        )}

       
        
      </form>
    </div>
  );
}

export default SearchBar;
