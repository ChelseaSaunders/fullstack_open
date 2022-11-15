import Button from './Button';

const NameList = (props) => {
  return (
    <ul>
      {props.countries.map((country) => {
        return <li key={country.name.official}>
          {country.name.common}
          <Button
            name={country.name.common}
            handleButtonClick={props.handleButtonClick}
            text="Show"
          />
        </li>
      })}
  </ul>
  );
};

export default NameList;