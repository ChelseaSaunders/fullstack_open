import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search';
import CountryList from './CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const hook = () => {
    console.log('effect');
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('fulfiled');
        setCountries(response.data);
      });
  };

  const handleSearch = event => setSearchValue(event.target.value);

  const matchingCountries = searchValue === '' ? [] : countries
    .filter((country) => {
      let regEx = new RegExp(searchValue, 'gi');
      return country.name.common.match(regEx);
    });

  useEffect(hook, []);
  return (
    <React.Fragment>
      <Search handleSearch={handleSearch} />
      <CountryList countries={matchingCountries} />
    </React.Fragment>
  );
}

export default App;
