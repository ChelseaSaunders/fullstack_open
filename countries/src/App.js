import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // const hook = () => {
  //   axios
  //     .get('https://restcountries.com/v3.1/all')
  //     .then(response => {
  //       setCountries(response.data);
  //     });
  // };

  const useCountry = () => {
    if (searchValue !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(response => {
          setCountries(response.data)
        })
        .catch((error) => {
          console.log(error)
          alert('Search did not retrieve any matches, try again.')
        })
    }
  }

  const handleSearch = event => setSearchValue(event.target.value);

  const handleButtonClick = event => setSearchValue(event.target.name);

  // const matchingCountries = searchValue === '' ? [] : countries
  //   .filter((country) => {
  //     let regEx = new RegExp(searchValue, 'gi');
  //     return country.name.common.match(regEx);
  //   });

  // useEffect(hook, []);
  useEffect(useCountry, [searchValue])

  return (
    <React.Fragment>
      <Search handleSearch={handleSearch} />
      <CountryList
        countries={countries}
        handleButtonClick={handleButtonClick}
      />
    </React.Fragment>
  );
}

export default App;
