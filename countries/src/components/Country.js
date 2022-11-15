import { useEffect, useState } from 'react';
import axios from 'axios';


const Country = (props) => {
  const api_key = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState();

  const country = props.country[0];
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];

  const hook = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`)
      .then(response => {
        setWeather(response.data.weather[0].description);
        setTemperature(response.data.main.temp);
      });
  };

  useEffect(hook, [api_key, lat, lon]);

  const generateLanguageList = () => {
    let langKeys = Object.keys(country.languages);
    return langKeys.map(langKey => {
      return <li key={langKey}>{country.languages[langKey]}</li>
    });
  };

  return (
    <div>
      <h1>{country.name.official}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>{generateLanguageList()}</ul>
      <img
        src={country.flags.png}
        alt={`${country.name.official} flag`}
      />
      <h1>Weather</h1>
      <p>{weather}</p>
      <p>{temperature}</p>
    </div>
  );
};

export default Country;