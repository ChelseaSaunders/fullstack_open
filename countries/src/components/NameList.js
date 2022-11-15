
const NameList = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => {
        return <li key={country.name.official}>{country.name.common}</li>
      })}
  </ul>
  );
};

export default NameList;