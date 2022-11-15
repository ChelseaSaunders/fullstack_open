import Country from './components/Country';
import NameList from './components/NameList';

const CountryList = ({ countries }) => {
  if (countries.length > 10) {
    return (<p>Too many matches. Specify another filter.</p>);
  } else if (countries.length === 1) {
    return <Country country={countries} />
  } else if (countries.length === 0) {
    return <p>Sorry, there are no matches.</p>
  } else {
    return <NameList countries={countries} />
  }
}

export default CountryList;