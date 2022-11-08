import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  const Display = ({ counter }) => <div>{counter}</div>;

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

  return (
    <React.Fragment>
      <Display counter={counter} />
      <Button onClick={increaseCounter} text="Add 1 to Counter" />
      <Button onClick={decreaseCounter} text="Subtract 1 from Counter" />
      <Button onClick={resetCounter} text="Reset Counter" />
    </React.Fragment>
  );
};

export default App;