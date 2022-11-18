import Country from './Country';
import NameList from './NameList';

const CountryList = ({ countries, handleButtonClick }) => {
  if (countries.length > 10) {
    return (<p>Too many matches. Specify another filter.</p>);
  } else if (countries.length === 1) {
    return <Country country={countries} />
  } else if (countries.length === 0) {
    return <p>Sorry, there are no matches.</p>
  } else {
    return <NameList
      countries={countries}
      handleButtonClick={handleButtonClick}
    />
  }
}

export default CountryList;