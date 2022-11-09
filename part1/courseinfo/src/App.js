import React, { useState } from 'react';

const Display = props => <div>{props.value}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log('value now', newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="Thousand" />
      <Button handleClick={() => setToValue(0)} text="Reset to 0" />
      <Button handleClick={() => setToValue(value +1)} text="Add 1" />
    </div>
  );
};

export default App;