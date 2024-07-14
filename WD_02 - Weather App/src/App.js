import React, { useState, useEffect } from 'react';
import './App.css';
import search from './images/search.png';
import humidity from './images/humidity.png';
import wind from './images/wind.png';
import clear from './images/clear.png';
import clouds from './images/clouds.png';
import drizzle from './images/drizzle.png';
import mist from './images/mist.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import weather from './images/weather.jpg';

const App = () => {
  const [city, setCity] = useState('chennai');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const weatherApiKey = 'b2fa3271ab55c9c76e1b2a2d1afd0478';
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const imageApiKey = "2BsfBnNAfcAGF3oX4F_fRIlYnOXYBGYyJpeHfo8AWp4";
  const imageURL = "https://api.unsplash.com/search/photos?page=1&query=";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(weatherURL + city + `&appid=${weatherApiKey}`);
        const data = await response.json();

        if (response.status === 404) {
          setError(true);
          setWeatherData(null);
          setBackgroundImage({ weather });
        } else {
          setError(false);
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(true);
        setWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchImage = async () => {
      try {
        const response = await fetch(imageURL + city + `&client_id=${imageApiKey}`);
        const data = await response.json();

        if (data.results.length > 0) {
          const img = data.results[0].urls.full;
          setBackgroundImage(img);
        } else {
          setBackgroundImage(`./images/weather.jpg`);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setBackgroundImage({ weather });
      }
    };
    fetchWeather();
    fetchImage();
    document.querySelector(".input-group input").value = '';

  }, [city]);

  const handleSearch = () => {
    const cityInput = document.querySelector(".input-group input").value.trim();
    if (cityInput) {
      setCity(cityInput);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className='vh-100 py-5 d-flex justify-content-center' style={{ background: "linear-gradient(135deg, rgb(0, 15, 31) 72%, rgb(6, 35, 116) 100%)" }}>
      {isLoading ? (
        <div id="preloader"><div className='loader'></div></div>
      ) : (

        <div className="container container-fluid d-flex col-8 col-lg-4 col-md-4 col-sm-4 h-100 w-75 justify-content-center align-items-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})` }}>
          <div className="row w-100">
            <div className="col-12 col-md-12">
              <div className="input-group mb-2 mt-3 col-2">
                <input type="text" id="city-input" className='form-control rounded' aria-label="City Name" aria-describedby="button-addon" placeholder="Enter City Name" spellCheck="false" onKeyUp={handleKeyPress} />
                <button className="btn btn-light mx-3 rounded search" id="button-addon" onClick={handleSearch}>
                  <img src={search} alt="search" />
                </button>
              </div>

              {error ? (
                <div className="error" role="alert">
                  <p className='alert-link text-light'>Invalid City Name</p>
                </div>
              ) : (
                weatherData && (
                  <div className="weather text-center">
                    <div className="card-body">
                      {weatherData.weather[0].main.toLowerCase() === 'clouds' && <img src={clouds} alt={weatherData.weather[0].main} className="weather-icon" />}
                      {weatherData.weather[0].main.toLowerCase() === 'clear' && <img src={clear} alt={weatherData.weather[0].main} className="weather-icon" />}
                      {weatherData.weather[0].main.toLowerCase() === 'mist' && <img src={mist} alt={weatherData.weather[0].main} className="weather-icon" />}
                      {weatherData.weather[0].main.toLowerCase() === 'rain' && <img src={rain} alt={weatherData.weather[0].main} className="weather-icon" />}
                      {weatherData.weather[0].main.toLowerCase() === 'snow' && <img src={snow} alt={weatherData.weather[0].main} className="weather-icon" />}
                      {weatherData.weather[0].main.toLowerCase() === 'haze' && <img src={drizzle} alt={weatherData.weather[0].main} className="weather-icon" />}
                      <p className='card-text text-light' id="condition">{weatherData.weather[0].main}</p>
                      <h1 className='card-title text-light' id="temp">{Math.round(weatherData.main.temp)}°c</h1>
                      <h2 className='card-subtitle mb-2 text-light' id="city">{weatherData.name}</h2>

                      <div className="row">
                        <div className="col win">
                          <img src={humidity} alt="humidity" />
                          <div>
                            <p className="humidity text-light">{weatherData.main.humidity}%</p>
                            <p>Humidity</p>
                          </div>
                        </div>
                        <div className="col win">
                          <img src={wind} alt="wind" />
                          <div>
                            <p className="wind text-light">{weatherData.wind.speed}Km/h</p>
                            <p>Wind Speed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; export default App;
