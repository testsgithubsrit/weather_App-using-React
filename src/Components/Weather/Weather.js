import React, { useState } from 'react';

const Weather = () => {
  // States to manage weather data
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Get current date and day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const currentDay = days[now.getDay()]; // Get current day
  const currentDate = now.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }); // Get current date

  // Handle form submission
  const getWeather = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (cityName === '') {
      setErrorMessage('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2018e6d071dc1e554096e814c0bf8997`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === '404') {
        setErrorMessage('City not found!');
        setWeatherData(null);
      } else {
        const kelvinTemp = data.main.temp;
        const celsiusTemp = (kelvinTemp - 273.15).toFixed(2); // Convert to Celsius
        const fahrenheitTemp = ((kelvinTemp - 273.15) * 9 / 5 + 32).toFixed(2); // Convert to Fahrenheit
        setWeatherData({
          city: data.name,
          country: data.sys.country,
          tempCelsius: celsiusTemp,
          tempFahrenheit: fahrenheitTemp,
          weatherStatus: data.weather[0].main,
        });
      }
    } catch (error) {
      setErrorMessage('Error fetching weather data');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <div className="form-search">
        <form className="d-flex" onSubmit={getWeather}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter city"
            aria-label="Search"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)} // Update state when user types
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      <div className="box">
        <div className="top-layer">
          <p id="day">{currentDay}</p>
          <p id="today-date">{currentDate}</p>
        </div>

        <div className="main-layer">
          <h2 id="city-name">{weatherData ? `${weatherData.city}, ${weatherData.country}` : ''}</h2>

          {weatherData && (
            <div className="middle-layer">
              <h1 id="temp">{weatherData.tempCelsius} °C , {weatherData.weatherStatus}</h1>
              <p id="temp-status">{weatherData.weatherStatus}</p>
            </div>
          )}

          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
