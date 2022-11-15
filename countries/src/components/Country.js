const Country = (props) => {
  const country = props.country[0];
  const generateLanguageList = () => {
    let langKeys = Object.keys(country.languages);
    return langKeys.map(langKey => {
      return <li key={langKey}>{country.languages[langKey]}</li>
    });
  };
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>{generateLanguageList()}</ul>
      <img
        src={country.flags.png}
        alt={`${country.name.official} flag`} />
    </div>
  );
};

export default Country;